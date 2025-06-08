export interface LandingPageInterface {
  title: string;
  sections: Section[];
}

export interface Section {
  metadata: Metadata;
  sys: Sys;
  fields: Fields;
}

export interface Metadata {
  tags: any[];
  concepts: any[];
}

export interface Sys {
  space: Space;
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: Environment;
  publishedVersion: number;
  revision: number;
  contentType: ContentType;
  locale: string;
}

export interface Space {
  sys: Sys2;
}

export interface Sys2 {
  type: string;
  linkType: string;
  id: string;
}

export interface Environment {
  sys: Sys3;
}

export interface Sys3 {
  id: string;
  type: string;
  linkType: string;
}

export interface ContentType {
  sys: Sys4;
}

export interface Sys4 {
  type: string;
  linkType: string;
  id: string;
}

export interface Fields {
  headline?: string;
  subheadline?: string;
  backgroundImage?: BackgroundImage;
  ctaButtonText?: string;
  ctaButtonLink?: string;
  title?: string;
  features?: Feature[];
  testimonials?: Testimonial[];
  products?: Product[];
  description?: string;
  copyrightText?: string;
  socialMediaLinks?: SocialMediaLink[];
}

export interface BackgroundImage {
  metadata: Metadata2;
  sys: Sys5;
  fields: Fields2;
}

export interface Metadata2 {
  tags: any[];
  concepts: any[];
}

export interface Sys5 {
  space: Space2;
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: Environment2;
  publishedVersion: number;
  revision: number;
  locale: string;
}

export interface Space2 {
  sys: Sys6;
}

export interface Sys6 {
  type: string;
  linkType: string;
  id: string;
}

export interface Environment2 {
  sys: Sys7;
}

export interface Sys7 {
  id: string;
  type: string;
  linkType: string;
}

export interface Fields2 {
  title: string;
  description: string;
  file: File;
}

export interface File {
  url: string;
  details: Details;
  fileName: string;
  contentType: string;
}

export interface Details {
  size: number;
  image: Image;
}

export interface Image {
  width: number;
  height: number;
}

export interface Feature {
  metadata: Metadata3;
  sys: Sys8;
  fields: Fields3;
}

export interface Metadata3 {
  tags: any[];
  concepts: any[];
}

export interface Sys8 {
  space: Space3;
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: Environment3;
  publishedVersion: number;
  revision: number;
  contentType: ContentType2;
  locale: string;
}

export interface Space3 {
  sys: Sys9;
}

export interface Sys9 {
  type: string;
  linkType: string;
  id: string;
}

export interface Environment3 {
  sys: Sys10;
}

export interface Sys10 {
  id: string;
  type: string;
  linkType: string;
}

export interface ContentType2 {
  sys: Sys11;
}

export interface Sys11 {
  type: string;
  linkType: string;
  id: string;
}

export interface Fields3 {
  icon: Icon;
  title: string;
  description: string;
}

export interface Icon {
  metadata: Metadata4;
  sys: Sys12;
  fields: Fields4;
}

export interface Metadata4 {
  tags: any[];
  concepts: any[];
}

export interface Sys12 {
  space: Space4;
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: Environment4;
  publishedVersion: number;
  revision: number;
  locale: string;
}

export interface Space4 {
  sys: Sys13;
}

export interface Sys13 {
  type: string;
  linkType: string;
  id: string;
}

export interface Environment4 {
  sys: Sys14;
}

export interface Sys14 {
  id: string;
  type: string;
  linkType: string;
}

export interface Fields4 {
  title: string;
  description: string;
  file: File2;
}

export interface File2 {
  url: string;
  details: Details2;
  fileName: string;
  contentType: string;
}

export interface Details2 {
  size: number;
  image: Image2;
}

export interface Image2 {
  width: number;
  height: number;
}

export interface Testimonial {
  metadata: Metadata5;
  sys: Sys15;
  fields: Fields5;
}

export interface Metadata5 {
  tags: any[];
  concepts: any[];
}

export interface Sys15 {
  space: Space5;
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: Environment5;
  publishedVersion: number;
  revision: number;
  contentType: ContentType3;
  locale: string;
}

export interface Space5 {
  sys: Sys16;
}

export interface Sys16 {
  type: string;
  linkType: string;
  id: string;
}

export interface Environment5 {
  sys: Sys17;
}

export interface Sys17 {
  id: string;
  type: string;
  linkType: string;
}

export interface ContentType3 {
  sys: Sys18;
}

export interface Sys18 {
  type: string;
  linkType: string;
  id: string;
}

export interface Fields5 {
  quote: string;
  authorName: string;
  authorTitlecompany: string;
}

export interface Product {
  metadata: Metadata6;
  sys: Sys19;
  fields: Fields6;
}

export interface Metadata6 {
  tags: any[];
  concepts: any[];
}

export interface Sys19 {
  space: Space6;
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: Environment6;
  publishedVersion: number;
  revision: number;
  contentType: ContentType4;
  locale: string;
}

export interface Space6 {
  sys: Sys20;
}

export interface Sys20 {
  type: string;
  linkType: string;
  id: string;
}

export interface Environment6 {
  sys: Sys21;
}

export interface Sys21 {
  id: string;
  type: string;
  linkType: string;
}

export interface ContentType4 {
  sys: Sys22;
}

export interface Sys22 {
  type: string;
  linkType: string;
  id: string;
}

export interface Fields6 {
  title: string;
  description: string;
  keySpecifications: KeySpecification[];
  productImages: ProductImage[];
}

export interface KeySpecification {
  metadata: Metadata7;
  sys: Sys23;
  fields: Fields7;
}

export interface Metadata7 {
  tags: any[];
  concepts: any[];
}

export interface Sys23 {
  space: Space7;
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: Environment7;
  publishedVersion: number;
  revision: number;
  contentType: ContentType5;
  locale: string;
}

export interface Space7 {
  sys: Sys24;
}

export interface Sys24 {
  type: string;
  linkType: string;
  id: string;
}

export interface Environment7 {
  sys: Sys25;
}

export interface Sys25 {
  id: string;
  type: string;
  linkType: string;
}

export interface ContentType5 {
  sys: Sys26;
}

export interface Sys26 {
  type: string;
  linkType: string;
  id: string;
}

export interface Fields7 {
  name: string;
  value: string;
}

export interface ProductImage {
  metadata: Metadata8;
  sys: Sys27;
  fields: Fields8;
}

export interface Metadata8 {
  tags: any[];
  concepts: any[];
}

export interface Sys27 {
  space: Space8;
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: Environment8;
  publishedVersion: number;
  revision: number;
  locale: string;
}

export interface Space8 {
  sys: Sys28;
}

export interface Sys28 {
  type: string;
  linkType: string;
  id: string;
}

export interface Environment8 {
  sys: Sys29;
}

export interface Sys29 {
  id: string;
  type: string;
  linkType: string;
}

export interface Fields8 {
  title: string;
  description: string;
  file: File3;
}

export interface File3 {
  url: string;
  details: Details3;
  fileName: string;
  contentType: string;
}

export interface Details3 {
  size: number;
  image: Image3;
}

export interface Image3 {
  width: number;
  height: number;
}

export interface SocialMediaLink {
  metadata: Metadata9;
  sys: Sys30;
  fields: Fields9;
}

export interface Metadata9 {
  tags: any[];
  concepts: any[];
}

export interface Sys30 {
  space: Space9;
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: Environment9;
  publishedVersion: number;
  revision: number;
  contentType: ContentType6;
  locale: string;
}

export interface Space9 {
  sys: Sys31;
}

export interface Sys31 {
  type: string;
  linkType: string;
  id: string;
}

export interface Environment9 {
  sys: Sys32;
}

export interface Sys32 {
  id: string;
  type: string;
  linkType: string;
}

export interface ContentType6 {
  sys: Sys33;
}

export interface Sys33 {
  type: string;
  linkType: string;
  id: string;
}

export interface Fields9 {
  icon: Icon2;
  url: string;
}

export interface Icon2 {
  metadata: Metadata10;
  sys: Sys34;
  fields: Fields10;
}

export interface Metadata10 {
  tags: any[];
  concepts: any[];
}

export interface Sys34 {
  space: Space10;
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: Environment10;
  publishedVersion: number;
  revision: number;
  locale: string;
}

export interface Space10 {
  sys: Sys35;
}

export interface Sys35 {
  type: string;
  linkType: string;
  id: string;
}

export interface Environment10 {
  sys: Sys36;
}

export interface Sys36 {
  id: string;
  type: string;
  linkType: string;
}

export interface Fields10 {
  title: string;
  description: string;
  file: File4;
}

export interface File4 {
  url: string;
  details: Details4;
  fileName: string;
  contentType: string;
}

export interface Details4 {
  size: number;
  image: Image4;
}

export interface Image4 {
  width: number;
  height: number;
}
