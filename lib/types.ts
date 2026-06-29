export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type Transformation = {
  id: string;
  name: string;
  before_image: string;
  after_image: string;
  duration: string;
  result: string;
};

export type Post = {
  id: string;
  title: string;
  image: string;
  instagram_url: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
};
