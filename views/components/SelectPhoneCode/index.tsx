import React, { useState, useImperativeHandle } from 'react';
import { CaretDownOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { StyledList, Title, StyledModal, Wrapper, Head } from './styled';
import { PHONE_CODE } from 'src/utils/constants';
import { useTranslation } from 'next-i18next';

type Props = {};

export type PhoneCodeHandle = {
  getCode: () => number;
};

const PhoneCode: React.ForwardRefRenderFunction<PhoneCodeHandle, Props> = (
  {},
  ref
) => {
  const { t } = useTranslation('common');
  const [showModal, setShowModal] = useState(false);
  const [state, setState] = useState(PHONE_CODE);
  const [selectedCode, setSelectedCode] = useState(state[0]?.code || 82);

  const onSearch = (keyword: string) => {
    if (!keyword) return setState(PHONE_CODE);
    setState(
      PHONE_CODE.filter((a) =>
        `${a.country}: +${a.code}`.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  };

  const onClose = () => setShowModal(false);

  useImperativeHandle(ref, () => ({
    getCode: () => {
      return selectedCode;
    },
  }));

  return (
    <>
      <StyledModal
        onCancel={onClose}
        closable
        centered
        visible={showModal}
        footer={null}
        width={400}
      >
        <Wrapper>
          <Head>
            <Title>{t('phoneCode.title')}</Title>
            <Input.Search
              placeholder={t('phoneCode.search')}
              allowClear
              size='middle'
              onSearch={onSearch}
              onChange={(e) => onSearch(e.target.value)}
            />
          </Head>
          <StyledList
            bordered
            dataSource={state}
            renderItem={(item) => (
              <StyledList.Item
                className={selectedCode === item.code && 'active'}
                onClick={() => {
                  setSelectedCode(item.code);
                  onClose();
                }}
              >
                {`${item.country}`}
                <span>{`+${item.code}`}</span>
              </StyledList.Item>
            )}
          />
        </Wrapper>
      </StyledModal>

      <span
        className='phone-text'
        onClick={() => setShowModal(true)}
        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
      >
        {`+ ${selectedCode}`}
        <CaretDownOutlined style={{ fontSize: 14, marginLeft: 3 }} />
      </span>
    </>
  );
};

export default React.forwardRef(PhoneCode);
