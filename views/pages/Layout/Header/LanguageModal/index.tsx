import React, { useState, useImperativeHandle } from 'react';
import Cookie from 'js-cookie';
import { Tabs } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { WrapModalContent, WrapContentTab, StyledModal } from './styled';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useAppState } from 'src/context/AppContext';
import axios from 'axios';

const { TabPane } = Tabs;

export type ModalHandle = {
  open: () => void;
};

const ModalLanguages: React.ForwardRefRenderFunction<ModalHandle> = (
  _,
  ref
) => {
  const router = useRouter();
  const { localeSetting, setLocaleSetting } = useAppState();
  const [isShow, setShowModal] = useState(false);
  const { t } = useTranslation('header');

  const onClose = () => {
    setShowModal(false);
  };

  const onChangeLanguage = (lang: string) => (e) => {
    e.preventDefault();
    Cookie.set('lang', lang);
    router.push(router.asPath, undefined, { locale: lang });
  };

  const onChangeCurrency = (currency: string) => (e) => {
    e.preventDefault();

    axios
      .get(`https://api.coincap.io/v2/rates/${currency}`)
      .then(({ data: { data } }) => {
        setLocaleSetting((state) => ({ ...state, rate: data.rateUsd }));
      });

    Cookie.set('currency', currency);
    setLocaleSetting((state) => ({ ...state, currency }));
    setShowModal(false);
  };

  useImperativeHandle(ref, () => ({
    open: () => {
      setShowModal(true);
    },
  }));

  return (
    <StyledModal
      title={null}
      closeIcon={<></>}
      centered
      visible={isShow}
      onCancel={onClose}
      width={700}
      footer={null}
    >
      <WrapModalContent>
        <Tabs tabBarExtraContent={<CloseOutlined onClick={onClose} />}>
          <TabPane tab={t('language.tab_1')} key='1'>
            <WrapContentTab>
              <div
                className={classNames('language-tabs-content-item-text', {
                  active: localeSetting.lang == 'en',
                })}
                onClick={onChangeLanguage('en')}
              >
                English
              </div>
              <div
                className={classNames('language-tabs-content-item-text', {
                  active: localeSetting.lang == 'cn',
                })}
                onClick={onChangeLanguage('cn')}
              >
                繁體中文
              </div>
              <div
                className={classNames('language-tabs-content-item-text', {
                  active: localeSetting.lang == 'th',
                })}
                onClick={onChangeLanguage('th')}
              >
                ไทย
              </div>
            </WrapContentTab>
          </TabPane>
          <TabPane tab={t('language.tab_2')} key='2'>
            <WrapContentTab>
              <div
                className={classNames('language-tabs-content-item-text', {
                  active: localeSetting.currency === 'tether',
                })}
                onClick={onChangeCurrency('tether')}
              >
                USD - $
              </div>
              <div
                className={classNames('language-tabs-content-item-text', {
                  active: localeSetting.currency === 'south-korean-won',
                })}
                onClick={onChangeCurrency('south-korean-won')}
              >
                KRW - ₩
              </div>
              <div
                className={classNames('language-tabs-content-item-text', {
                  active: localeSetting.currency === 'chinese-yuan-renminbi',
                })}
                onClick={onChangeCurrency('chinese-yuan-renminbi')}
              >
                CNY - ￥
              </div>
            </WrapContentTab>
          </TabPane>
        </Tabs>
      </WrapModalContent>
    </StyledModal>
  );
};

export default React.forwardRef(ModalLanguages);
