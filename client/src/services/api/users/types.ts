type User = {
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
};

export type ListResponse = Array<User>;

export type ViewResponse = User;