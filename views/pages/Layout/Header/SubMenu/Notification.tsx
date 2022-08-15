import React from 'react';
import Link from 'next/link';
import { StyledWrapMenuDynamic } from './styled';
import { useTranslation } from 'next-i18next';

export const View = () => {
  const { t } = useTranslation('header');

  return (
    <StyledWrapMenuDynamic>
      <div className='dropdown-header d-flex align-items-center justify-content-between'>
        <p className='mb-0 font-weight-medium'>{t('notification.title')}</p>
        <Link href='#'>
          <a className='text-muted'>{t('notification.clear_button')}</a>
        </Link>
      </div>
      <div className='dropdown-body'>
        <Link href='#'>
          <a className='dropdown-item'>
            <div className='icon'>
              <i className='icon ion-md-lock'></i>
            </div>
            <div className='content'>
              <p>Account password change</p>
              <p className='sub-text text-muted'>5 sec ago</p>
            </div>
          </a>
        </Link>
        <Link href='#'>
          <a className='dropdown-item'>
            <div className='icon'>
              <i className='icon ion-md-alert'></i>
            </div>
            <div className='content'>
              <p>Solve the security issue</p>
              <p className='sub-text text-muted'>10 min ago</p>
            </div>
          </a>
        </Link>
        <Link href='#'>
          <a className='dropdown-item'>
            <div className='icon'>
              <i className='icon ion-logo-android'></i>
            </div>
            <div className='content'>
              <p>Download android app</p>
              <p className='sub-text text-muted'>1 hrs ago</p>
            </div>
          </a>
        </Link>
        <Link href='#'>
          <a className='dropdown-item'>
            <div className='icon'>
              <i className='icon ion-logo-bitcoin'></i>
            </div>
            <div className='content'>
              <p>Bitcoin price is high now</p>
              <p className='sub-text text-muted'>2 hrs ago</p>
            </div>
          </a>
        </Link>
        <Link href='#'>
          <a className='dropdown-item'>
            <div className='icon'>
              <i className='icon ion-logo-usd'></i>
            </div>
            <div className='content'>
              <p>Payment completed</p>
              <p className='sub-text text-muted'>4 hrs ago</p>
            </div>
          </a>
        </Link>
      </div>
      <div className='dropdown-footer d-flex align-items-center justify-content-center'>
        <Link href='#'>
          <a>{t('notification.message_list')}</a>
        </Link>
      </div>
    </StyledWrapMenuDynamic>
  );
};

export default View;
