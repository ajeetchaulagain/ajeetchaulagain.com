import React from 'react';
import * as popupModalStyles from './popup-modal.module.scss';

const PopupModal = (): JSX.Element => {
  return (
    <div className={popupModalStyles.modalWrapper}>
      <div className={popupModalStyles.modal} id="test-view" aria-hidden="true">
        <div className={popupModalStyles.modalDialog}>
          <div className={popupModalStyles.modalHeader}>
            <h2>Welcome to my site</h2>
            <a
              href="#test-view"
              className={popupModalStyles.btnClose}
              aria-hidden="true"
            >
              ×
            </a>
          </div>
          <div className={popupModalStyles.modalBody}>
            <p>
              Hi everyone welcome to Ajeet Chaulagain's personal site. The site
              is in progress at the moment to bring some major updates. There
              are some dummy content populated for now.
            </p>
            <p>
              Sorry for the inconvenience created. You can still browse the
              site!
            </p>
          </div>
          <div className={popupModalStyles.modalFooter}>
            {' '}
            <a href="#test-view" className={popupModalStyles.btn}>
              Continue viewing website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
