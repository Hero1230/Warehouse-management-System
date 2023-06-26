import ShopLayout from '@/layouts/ShopLayout';
import styles from './OrderDetailsPage.module.scss';
import Bar from '@/components/shop/bar/Bar';
import Button from '@/components/shop/button/Button';
import ButtonBack from '@/components/shop/button/ButtonBack';
import { useForm } from 'react-hook-form';
import FormInput from '@/components/input/FormInput';

const OrderDetailsPage = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <ShopLayout>
      <ButtonBack navigateTo="/shop/cart" />
      <h2>Order Details</h2>
      <form className={styles.form}>
        <FormInput
          id="fullName"
          name="fullName"
          placeholder="Full Name"
          control={control}
          required={true}
          rules={{
            required: true,
          }}
        />
        <FormInput
          id="email"
          name="email"
          placeholder="Email"
          control={control}
          required={true}
          rules={{
            required: true,
          }}
        />
        <FormInput
          id="address"
          name="address"
          placeholder="Address (House No. Building)"
          control={control}
          required={true}
          rules={{
            required: true,
          }}
        />
        <div className={styles.row}>
          <FormInput
            id="city"
            name="city"
            placeholder="City"
            control={control}
            required={true}
            rules={{
              required: true,
            }}
          />
          <FormInput
            id="postcode"
            name="postcode"
            placeholder="Postcode"
            control={control}
            required={true}
            rules={{
              required: true,
            }}
          />
        </div>
      </form>
      <Bar />
      <Button
        onClick={handleSubmit(onSubmit)}
        content="Pay"
        disabled={!isValid}
      />
    </ShopLayout>
  );
};

export default OrderDetailsPage;
