import { create } from "ipfs-http-client";

export const CONTRACT_ADDRESS = "0x4826533B4897376654Bb4d4AD88B7faFD0C98528";
export const DATE_OPTIONS = {
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "numeric"
}
export const CATEGORY_DICT = {
    "ADD": "Advertising",
    "SMD": "Social media",
    "TRT": "Travels & tourism",
    "ARC": "Architecture",
    "DPR": "Digital products"
}
export const PROJECT_STATUS_DICT = {
    "0": "Unpublished",
    "1": "Opened",
    "2": "Closed"
}

export const PROJECT_STATUS_ACTIONS_DICT = {
    "0": "Edit",
    "1": "View more",
    "2": "View more"
}
export const IPFS_CLIENT = create('https://ipfs.infura.io:5001/api/v0');
export function cropAtLengthIdx(idx, item) {
    return item.length > idx ? `${item.substring(0, idx-1)}...` : item;
}