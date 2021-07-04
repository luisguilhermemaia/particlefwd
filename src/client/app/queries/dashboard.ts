import gql from 'graphql-tag';

export const GET_DASHBOARD = gql`
  query {
    dashboard {
      id
      sellerId
      title
      makeId
      makeKey
      modelKey
      images {
        uri
        set
      }
      price {
        gross
        grs {
          amount
          currency
        }
        net
        nt {
          amount
          currency
        }
        type
        type
        vat
      }
      vat
      contact {
        type
        country
        enumType
        name
        address1
        address2
        phones {
          type
          number
        }
        latLong {
          lon
          lat
        }
        imprint
        withMobileSince
        canSendCcMail
      }
      isNew
      isConditionNew
      isPreRegistration
      category
      description
      attributes {
        label
        tag
        value
      }
      features
      hasDamage
      adMobTargeting {
        make
        model
        price
        dealer
        channel
        preis
        ma
        kw
        ez
        intid
        advid
      }
    }
  }
`;
