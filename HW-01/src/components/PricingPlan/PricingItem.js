import React from 'react';
import PropTypes from 'prop-types';
import styles from './PricingItem.module.css';

const PricingItem = ({ icon, label, capacity, description, price }) => (
  <div className={styles['pricing-item']}>
    <i
      className={styles.icon}
      style={{ background: `url(${icon}) no-repeat bottom` }}
    />
    <h2 className={styles.label}>{label}</h2>
    <p className={styles.capacity}>{capacity} Storage</p>
    <p className={styles.description}>{description}</p>
    <p className={styles.price}>${price}/MO</p>
    <button type="button" className={styles.button}>
      Get Started
    </button>
  </div>
);

PricingItem.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  capacity: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default PricingItem;
