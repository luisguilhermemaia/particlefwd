import { Field, Int, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ImagesEntity {
  @Field(() => String, { nullable: false })
  uri: string;

  @Field(() => String, { nullable: false })
  set: string;
}

@ObjectType()
export class GrsOrNt {
  @Field(() => Float, { nullable: false })
  amount: number;

  @Field(() => String, { nullable: false })
  currency: string;
}

@ObjectType()
export class PhonesEntity {
  @Field(() => String, { nullable: false })
  type: string;

  @Field(() => String, { nullable: false })
  number: string;

  @Field(() => String, { nullable: false })
  uri: string;
}

@ObjectType()
export class LatLong {
  @Field(() => Float, { nullable: false })
  lon: number;

  @Field(() => Float, { nullable: false })
  lat: number;
}

@ObjectType()
export class AttributesEntity {
  @Field(() => String, { nullable: false })
  label: string;

  @Field(() => String, { nullable: true })
  tag: string;

  @Field(() => String, { nullable: false })
  value: string;
}

@ObjectType()
export class AdMobTargeting {
  @Field(() => String, { nullable: false })
  make: string;

  @Field(() => String, { nullable: false })
  model: string;

  @Field(() => String, { nullable: false })
  price: string;

  @Field(() => String, { nullable: false })
  dealer: string;

  @Field(() => String, { nullable: false })
  channel: string;

  @Field(() => String, { nullable: false })
  preis: string;

  @Field(() => String, { nullable: false })
  ma: string;

  @Field(() => String, { nullable: false })
  kw: string;

  @Field(() => String, { nullable: false })
  ez: string;

  @Field(() => String, { nullable: false })
  intid: string;

  @Field(() => String, { nullable: false })
  advid: string;
}

@ObjectType()
export class Price {
  @Field(() => String, { nullable: false })
  gross: string;

  @Field(() => GrsOrNt, { nullable: true })
  grs: GrsOrNt;

  @Field(() => String, { nullable: false })
  net: string;

  @Field(() => GrsOrNt, { nullable: true })
  nt: GrsOrNt;

  @Field(() => String, { nullable: false })
  type: string;

  @Field(() => Int, { nullable: false })
  vat: number;
}

@ObjectType()
export class Contact {
  @Field(() => String, { nullable: false })
  type: string;

  @Field(() => String, { nullable: false })
  country: string;

  @Field(() => String, { nullable: false })
  enumType: string;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  address1: string;

  @Field(() => String, { nullable: false })
  address2: string;

  @Field(() => [PhonesEntity], { nullable: true })
  phones: PhonesEntity[];

  @Field(() => LatLong, { nullable: false })
  latLong: LatLong;

  @Field(() => String, { nullable: false })
  imprint: string;

  @Field(() => String, { nullable: false })
  withMobileSince: string;

  @Field(() => Boolean, { nullable: false })
  canSendCcMail: boolean;
}

@ObjectType()
export class Dashboard {
  @Field(() => Int, { nullable: false })
  id: number;

  @Field(() => Int, { nullable: false })
  sellerId: number;

  @Field(() => String, { nullable: false })
  title: string;

  @Field(() => Int, { nullable: false })
  makeId: number;

  @Field(() => String, { nullable: false })
  makeKey: string;

  @Field(() => String, { nullable: false })
  modelKey: string;

  @Field(() => [ImagesEntity], { nullable: true })
  images: ImagesEntity[];

  @Field(() => Price, { nullable: true })
  price: Price;

  @Field(() => String, { nullable: false })
  vat: string;

  @Field(() => Contact, { nullable: true })
  contact: Contact;

  @Field(() => Boolean, { nullable: false })
  isNew: boolean;

  @Field(() => Boolean, { nullable: false })
  isConditionNew: boolean;

  @Field(() => Boolean, { nullable: false })
  isPreRegistration: boolean;

  @Field(() => String, { nullable: false })
  category: string;

  @Field(() => String, { nullable: false })
  description: string;

  @Field(() => [AttributesEntity], { nullable: true })
  attributes: AttributesEntity[];

  @Field(() => [String], { nullable: true })
  features: string[];

  @Field(() => Boolean, { nullable: false })
  hasDamage: boolean;

  @Field(() => Boolean, { nullable: false })
  isDamageCase: boolean;

  @Field(() => String, { nullable: false })
  htmlDescription: string;

  @Field(() => String, { nullable: false })
  segment: string;

  @Field(() => String, { nullable: false })
  vc: string;

  @Field(() => Int, { nullable: false })
  created: number;

  @Field(() => AdMobTargeting, { nullable: true })
  adMobTargeting: AdMobTargeting;
}
