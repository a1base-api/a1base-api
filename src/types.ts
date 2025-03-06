// src/types.ts

export interface SendIndividualMessageData {
  content: string;
  from: string;
  to: string;
  service: string;
  attachment_uri?: string;
  auth_id?: string; // Optional, as it's added internally
}

export interface SendGroupMessageData {
  content: string;
  thread_id: string;
  service: string;
  attachment_uri?: string;
  from: string; // Added as required by new API
}

export interface MessageDetails {
  chat_id: string;
  chat_name: string;
  participants: string[];
  account_id: string;
  message_id: string;
  to: string;
  from: string;
  body: string;
  status: string;
  date_created: string;
  direction: string;
  attachment_uri?: string;
}

export interface GroupDetails {
  account_id: string;
  chat_id: string;
  chat_name: string;
  participants: string[];
}

export interface RecentMessage {
  message_id: string;
  content: string;
  from: string;
  to: string;
  service: string;
  date_sent: string;
  status: string;
  direction: string;
  attachment_uri?: string;
}

export interface RecentMessages {
  thread_id: string;
  account_id: string;
  messages: RecentMessage[];
}

/**
 * Interface for API Credentials
 */
export interface APICredentials {
  apiKey: string;
  apiSecret: string;
}

// Add new webhook types
export interface MessageContent {
  text?: string;
  // Add other content types as needed
}

export interface WebhookPayload {
  thread_id: string;
  message_id: string;
  thread_type: 'group' | 'individual' | 'broadcast';
  content: string;
  sender_number: string;
  sender_name: string;
  a1_account_id: string;
  timestamp: string;
  service: 'whatsapp' | 'telegram';
  message_type: 'text' | 'image' | 'video' | 'audio' | 'document';
  is_from_agent: boolean;
  message_content: MessageContent;
}

// Add new interfaces for group management
export interface Thread {
  thread_id: string;
  thread_type: 'group' | 'individual' | 'broadcast';
  chat_name?: string;
  participants: string[];
  last_message?: {
    content: string;
    timestamp: string;
    sender_number: string;
  };
}

export interface ThreadList {
  threads: Thread[];
  total_count: number;
}
