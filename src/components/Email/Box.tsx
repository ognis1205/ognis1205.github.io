/**
 * @fileoverview Defines Box.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as ReactHookForm from 'react-hook-form';
import EmailJS from '@emailjs/browser';
import * as Email from '@/config/email';

export type FormDataType = {
  user_name: string;
  user_email: string;
  message: string;
};

export const Component: React.FunctionComponent<
  Record<string, never>
> = ({}: Record<string, never>): React.ReactElement => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = ReactHookForm.useForm();

  const onSubmit = (values: FormDataType): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        EmailJS.send(
          Email.config.serviceID,
          Email.config.templateID,
          values,
          Email.config.publicKey
        ).then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
        reset();
        resolve();
      }, 2000);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Chakra.Flex justify="center" textAlign="center">
        <Chakra.Box
          borderRadius="lg"
          w="100%"
          px={12}
          py={3}
          textAlign="center"
          bg={Chakra.useColorModeValue('whiteAlpha.500', 'blackAlpha.500')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          <Chakra.Stack spacing={4}>
            <Chakra.FormControl
              id="user_name"
              isInvalid={!!errors.user_name}
              isRequired
            >
              <Chakra.FormLabel>Name</Chakra.FormLabel>
              <Chakra.Input
                color="black"
                bg="white"
                border="none"
                type="text"
                placeholder="John Smith"
                _placeholder={{ opacity: 1, color: 'gray.400' }}
                {...register('user_name', { required: true })}
              />
              <Chakra.FormErrorMessage>
                {errors.user_name && 'Pealse enter your name'}
              </Chakra.FormErrorMessage>
            </Chakra.FormControl>
            <Chakra.FormControl
              id="email"
              isInvalid={!!errors.user_email}
              isRequired
            >
              <Chakra.FormLabel>Email</Chakra.FormLabel>
              <Chakra.Input
                color="black"
                bg="white"
                border="none"
                type="email"
                placeholder="johnsmith@example.com"
                _placeholder={{ opacity: 1, color: 'gray.400' }}
                {...register('user_email', { required: true })}
              />
              <Chakra.FormErrorMessage>
                {errors.user_email && 'Please enter your email'}
              </Chakra.FormErrorMessage>
            </Chakra.FormControl>
            <Chakra.FormControl
              id="message"
              isInvalid={!!errors.message}
              isRequired
            >
              <Chakra.FormLabel>Message</Chakra.FormLabel>
              <Chakra.Textarea
                color="black"
                bg="white"
                border="none"
                placeholder="Hi, ognis1205!"
                _placeholder={{ opacity: 1, color: 'gray.400' }}
                {...register('message', { required: true })}
              />
              <Chakra.FormErrorMessage>
                {errors.message && 'Please enter your message'}
              </Chakra.FormErrorMessage>
            </Chakra.FormControl>
          </Chakra.Stack>
          <Chakra.Button
            mt={4}
            colorScheme="teal"
            loadingText="Sending..."
            isLoading={isSubmitting}
            type="submit"
          >
            Send
          </Chakra.Button>
        </Chakra.Box>
      </Chakra.Flex>
    </form>
  );
};
