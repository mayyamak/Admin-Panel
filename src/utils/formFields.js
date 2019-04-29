import { language, ln, dir, swip, } from './language'
export const formFields =
{
  bookingModal: [
    {
      name: 'refereceId',
    },
  ],
  cityModal: [
    {
      name: 'city',
    },
  ],
  invoiceModal: [
    {
      name: 'payIdentifier',
    },
  ],
  resortModal: [
    {
      name: 'resort',
    },
  ],
  reviewModal: [
    {
      name: 'review',
    },
  ],
  userModal: [
    {
      name: 'username',
    }, {
      name: 'firstname',
    }, {
      name: 'lastname',
    }, {
      name: 'nationalId',
    }, {
      name: 'email',
    }, {
      name: 'mobile',
      type: 'number',
    }, {
      name: 'userType',
      type: 'select',
    }, {
      name: 'jender',
      type: 'select',
    }, {
      name: 'country',
      type: 'select',
    }, {
      name: 'province',
      type: 'select',
    }, {
      name: 'city',
      type: 'select',
    }, {
      name: 'active',
      type: 'checkbox',
    }, {
      name: 'language',
      type: 'select',
    }, {
      name: 'birthdate',
      type: 'date',
    }, {
      name: 'address',
      type: 'textarea',
    }, {
      name: 'postalCode',
    }, {
      name: 'bio',
      type: 'textarea',
    },
  ],
  resortModal: [
    {
      name: 'province',
      type: 'select',
      isRequired: true,
      stepId: 1,
    },{
      name: 'city',
      type: 'select',
      isRequired: true,
      stepId: 1,
    },{
      name: 'resortType',
      type: 'select',
      isRequired: true,
      stepId: 1,
    },{
      name: 'resortName',
      isRequired: true,
      stepId: 1,
    },{
      name: 'address',
      type: 'textarea',
      isRequired: true,
      stepId: 1,
    }, {
      name: 'summary',
      type: 'textarea',
      stepId: 1,
    }, {
      name: 'gpsLocation',
      isRequired: true,
      stepId: 2,
    }, {
      name: 'ownerId',
      isRequired: true,
      stepId: 4,
    }, {
      name: 'facilities',
      type: 'checkBoxList',
      items: [
        {
          name: 'elevator',
          icon: 'arrow-circle-up',
        }, {
          name: 'kitchen',
          icon: 'utensils',
        }, {
          name: 'restroom',
          icon: 'toilet',
        }, {
          name: 'bathroom',
          icon: 'bath',
        }, {
          name: 'internet',
          icon: 'wifi',
        }, {
          name: 'parking',
          icon: 'parking',
        }, {
          name: 'television',
          icon: 'tv',
        }, {
          name: 'pool',
          icon: 'swimming-pool',
        }, {
          name: 'cooler',
          icon: 'snowflake',
        }, {
          name: 'heater',
          icon: 'fire',
        }, {
          name: 'iron',
          icon: 'align-justify',
        }, {
          name: 'guard',
          icon: 'hamsa',
        },
      ],
      stepId: 4,
    }, {
      name: 'bedroomCount',
      type: 'number',
      isRequired: true,
      stepId: 3,
    }, {
      name: 'bedCount',
      type: 'number',
      isRequired: true,
      stepId: 3,
    }, {
      name: 'minGuestCount',
      type: 'number',
      isRequired: true,
      stepId: 3,
    }, {
      name: 'maxGuestCount',
      type: 'number',
      isRequired: true,
      stepId: 3,
    }, {
      name: 'perNightPrice',
      type: 'number',
      isRequired: true,
      stepId: 4,
    },
  ],
  updatePassword: [
    {
      name: 'password',
      type: 'password',
      isRequired: true,
    },
  ],
  updateBalance: [
    {
      name: 'balance',
      type: 'number',
      displayName: 'addBalance',
      placeholder: 'IRR',
      isRequired: true,
    },
    {
      name: 'defaultBalance',
      type: 'label',
      displayName: 'newBalance',
    }
  ],
  searchUsers: [
    {
      name: 'id',
    },
    {
      name: 'username',
    },
    {
      name: 'firstname',
    },
    {
      name: 'lastname',
    },
    {
      name: 'email',
    },
    {
      name: 'mobile',
      type: 'number',
    },
  ],


  searchLocations: [
    {
      name: 'province',
      type: 'select',
      isNullRequired: true,
    },
    {
      name: 'city',
      type: 'select',
      isNullRequired: true,
    },
    {
      name: 'latitude',
      type: 'number',
    },
    {
      name: 'longitude',
      type: 'number',
    },
      {
        name: 'locationName',
      },
  ],
}
