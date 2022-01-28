import React from 'react';
import './ServiceOther.css';
import documentation from '../../../images/icons/camera.png';
import invitation from '../../../images/icons/invitation.png';
import Venue from '../../../images/icons/fashion.png';
import decoration from '../../../images/icons/decor.png';
import entertainment from '../../../images/icons/music.png';
import product from '../../../images/icons/product.png';
import ServiceOtherShow from '../ServiceOtherShow/ServiceOtherShow';

const otherServicesData = [
  {
    id: 1,
    icon: documentation,
    name: 'Documentation',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
  },
  {
    id: 2,
    icon: invitation,
    name: 'Invitation cards',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
  },
  {
    id: 3,
    icon: entertainment,
    name: 'Entertainment',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
  },
  {
    id: 4,
    icon: decoration,
    name: 'Decoration',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
  },
  {
    id: 5,
    icon: product,
    name: 'Product Photography',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
  },
  {
    id: 6,
    icon: Venue,
    name: 'Venue Selection',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
  },
];

const ServiceOther = () => {
  return (
    <section className="ServiceOther">
      <div className="container ">
        <div className="otherServiceContent pb-6">
          <h6 className="section__subtitle text-primary d-flex justify-content-center mt-5">
            OTHER SERVICE
          </h6>
          <h2 className="d-flex justify-content-center section__title">
            We also provide
          </h2>
        </div>

        <div className="row mt-5">
          {otherServicesData.map((otherServices) => (
            <ServiceOtherShow otherServices={otherServices} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOther;
