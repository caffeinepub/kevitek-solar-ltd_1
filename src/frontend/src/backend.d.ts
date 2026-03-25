import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Inquiry {
    inquiryType: InquiryType;
    name: string;
    email: string;
    company: string;
    message: string;
    timestamp: Time;
    phone: string;
}
export type Time = bigint;
export enum InquiryType {
    bulkOrder = "bulkOrder",
    general = "general",
    dealership = "dealership"
}
export interface backendInterface {
    getAllInquiries(): Promise<Array<Inquiry>>;
    getInquiriesByEmail(email: string): Promise<Array<Inquiry>>;
    getInquiriesByType(inquiryType: InquiryType): Promise<Array<Inquiry>>;
    getInquiry(id: bigint): Promise<Inquiry>;
    getLatestInquiries(count: bigint): Promise<Array<Inquiry>>;
    searchInquiries(searchQuery: string): Promise<Array<Inquiry>>;
    submitInquiry(name: string, company: string, email: string, phone: string, message: string, inquiryType: InquiryType): Promise<bigint>;
}
