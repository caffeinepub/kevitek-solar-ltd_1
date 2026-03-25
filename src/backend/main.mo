import Iter "mo:core/Iter";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Nat "mo:core/Nat";
import Int "mo:core/Int";
import Map "mo:core/Map";

actor {
  type InquiryType = {
    #general;
    #bulkOrder;
    #dealership;
  };

  type Inquiry = {
    name : Text;
    company : Text;
    email : Text;
    phone : Text;
    message : Text;
    inquiryType : InquiryType;
    timestamp : Time.Time;
  };

  module Inquiry {
    public func compare(inq1 : Inquiry, inq2 : Inquiry) : Order.Order {
      Int.compare(inq2.timestamp, inq1.timestamp);
    };
  };

  // Inquiries storage
  var nextId = 0;
  let inquiries = Map.empty<Nat, Inquiry>();

  // Submit new inquiry
  public shared ({ caller }) func submitInquiry(name : Text, company : Text, email : Text, phone : Text, message : Text, inquiryType : InquiryType) : async Nat {
    if (name.size() == 0 or email.size() == 0 or message.size() == 0) {
      Runtime.trap("Missing required fields");
    };
    let id = nextId;
    let inquiry : Inquiry = {
      name;
      company;
      email;
      phone;
      message;
      inquiryType;
      timestamp = Time.now();
    };
    inquiries.add(id, inquiry);
    nextId += 1;
    id;
  };

  // Get specific inquiry by ID
  public query ({ caller }) func getInquiry(id : Nat) : async Inquiry {
    switch (inquiries.get(id)) {
      case (null) { Runtime.trap("Inquiry not found") };
      case (?inquiry) { inquiry };
    };
  };

  // Get all inquiries
  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries.values().toArray().sort();
  };

  // Get inquiries by type
  public query ({ caller }) func getInquiriesByType(inquiryType : InquiryType) : async [Inquiry] {
    let filtered = inquiries.values().toArray().filter(
      func(inquiry) { inquiry.inquiryType == inquiryType }
    );
    filtered.sort();
  };

  // Get latest n inquiries
  public query ({ caller }) func getLatestInquiries(count : Nat) : async [Inquiry] {
    let allInquiries = inquiries.values().toArray();
    let sorted = allInquiries.sort();
    sorted.sliceToArray(0, Nat.min(count, sorted.size()));
  };

  public query ({ caller }) func getInquiriesByEmail(email : Text) : async [Inquiry] {
    inquiries.values().toArray().filter(
      func(inquiry) { inquiry.email == email }
    );
  };

  public query ({ caller }) func searchInquiries(searchQuery : Text) : async [Inquiry] {
    inquiries.values().toArray().filter(
      func(inquiry) {
        inquiry.message.contains(#text searchQuery) or
        inquiry.name.contains(#text searchQuery)
      }
    );
  };
};
