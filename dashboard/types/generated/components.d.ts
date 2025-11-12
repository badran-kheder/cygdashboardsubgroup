import type { Schema, Struct } from '@strapi/strapi';

export interface ButtonsHeroButton extends Struct.ComponentSchema {
  collectionName: 'components_buttons_hero_buttons';
  info: {
    displayName: 'Hero Button';
  };
  attributes: {
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Boolean;
    Options: Schema.Attribute.Enumeration<['Primary', 'Secondary']>;
    text: Schema.Attribute.String;
  };
}

export interface HeroButtonsHeroButton extends Struct.ComponentSchema {
  collectionName: 'components_hero_buttons_hero_buttons';
  info: {
    displayName: 'Hero Button';
  };
  attributes: {
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Boolean;
    Options: Schema.Attribute.Enumeration<['Primary', 'Secondary']>;
    text: Schema.Attribute.String;
  };
}

export interface LinksNavLink extends Struct.ComponentSchema {
  collectionName: 'components_links_nav_links';
  info: {
    displayName: 'NavLink';
  };
  attributes: {
    label: Schema.Attribute.String;
    order: Schema.Attribute.Integer;
    url: Schema.Attribute.String;
  };
}

export interface ServiceDetailBenefit extends Struct.ComponentSchema {
  collectionName: 'components_service_detail_benefits';
  info: {
    displayName: 'Service Benefit';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ServiceDetailFeature extends Struct.ComponentSchema {
  collectionName: 'components_service_detail_features';
  info: {
    displayName: 'Service Feature';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    iconName: Schema.Attribute.String & Schema.Attribute.DefaultTo<'search'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ServiceDetailProcessStep extends Struct.ComponentSchema {
  collectionName: 'components_service_detail_process_steps';
  info: {
    displayName: 'Process Step';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    iconName: Schema.Attribute.String & Schema.Attribute.DefaultTo<'clipboard'>;
    step: Schema.Attribute.Integer & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ServiceSubServices extends Struct.ComponentSchema {
  collectionName: 'components_service_sub_services';
  info: {
    displayName: 'SubServices';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<['green', 'black']>;
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ServicesServices extends Struct.ComponentSchema {
  collectionName: 'components_services_services';
  info: {
    displayName: 'services';
  };
  attributes: {
    buttonHref: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageAlt: Schema.Attribute.String;
    title: Schema.Attribute.String;
    titleAccent: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'buttons.hero-button': ButtonsHeroButton;
      'hero-buttons.hero-button': HeroButtonsHeroButton;
      'links.nav-link': LinksNavLink;
      'service-detail.benefit': ServiceDetailBenefit;
      'service-detail.feature': ServiceDetailFeature;
      'service-detail.process-step': ServiceDetailProcessStep;
      'service.sub-services': ServiceSubServices;
      'services.services': ServicesServices;
    }
  }
}
