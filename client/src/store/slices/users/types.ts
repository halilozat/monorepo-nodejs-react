export type InitialState = {
  users: User[];
  user: User | null;
  meta: any[];
  loading: boolean;
  error?: any;
};

export type User = {
  id: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  pin: number;
  sections: any[];
  created_at: Date;
  updated_at: Date;
  last_login_at: Date;
  last_logout_at: Date;
  is_caller_id_user?: boolean;
};