import { useParams } from 'react-router-dom';
import styles from './LocationDetails.module.scss';
import DetailsList from '@/components/wms/details-list/DetailsList';
import { useEffect, useState } from 'react';
import { Detail } from '@/components/wms/details-list/types';
import ButtonBack from '@/components/shared/button/ButtonBack';
import { useLocationQuery } from './query';
import QRcodeCard from '@/components/wms/qr-code/QRCode';

const OrderDetails = () => {
  const { id } = useParams();
  const { data } = useLocationQuery(id!);
  const [items, setItems] = useState<Detail[] | null>(null);

  useEffect(() => {
    if (data) {
      setItems([
        { key: 'Location ID', value: id! },
        { key: 'Filled', value: data.palletId ? 'Yes' : 'No' },
      ]);
    }
  }, [data]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <DetailsList details={items} />
        <QRcodeCard value={id!} />
      </div>
    </div>
  );
};

export default OrderDetails;
