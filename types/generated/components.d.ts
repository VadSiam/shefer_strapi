import type { Schema, Attribute } from '@strapi/strapi';

export interface ProductDetailsColor extends Schema.Component {
  collectionName: 'components_product_details_colors';
  info: {
    displayName: 'Color';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    url: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ProductDetailsImage extends Schema.Component {
  collectionName: 'components_product_details_images';
  info: {
    displayName: 'Image';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    url: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    order: Attribute.Integer;
  };
}

export interface ProductDetailsSpec extends Schema.Component {
  collectionName: 'components_product_details_specs';
  info: {
    displayName: 'Spec';
  };
  attributes: {
    desc: Attribute.String;
    weight: Attribute.String;
    country: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'product-details.color': ProductDetailsColor;
      'product-details.image': ProductDetailsImage;
      'product-details.spec': ProductDetailsSpec;
    }
  }
}
