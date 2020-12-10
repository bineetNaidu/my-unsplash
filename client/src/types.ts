export type User = {
  _id: string;
  username: string;
  email: string;
  hobby: string;
};

export type Image = {
  _id?: string;
  id?: string;
  url: string;
  name: string;
  description: string;
  uploadedBy: string;
};
