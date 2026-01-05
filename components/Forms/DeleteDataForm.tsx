'use client';

import { useState } from 'react';
import {
  TextInput,
  Textarea,
  Checkbox,
  Button,
  Group,
  Stack,
  Text,
  Alert,
  LoadingOverlay,
  PasswordInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconAlertCircle, IconCheck } from '@tabler/icons-react';

interface DeleteDataFormValues {
  email: string;
  confirmEmail: string;
  password: string;
  reason: string;
  understand: boolean;
  confirmDeletion: boolean;
}

export function DeleteDataForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<DeleteDataFormValues>({
    initialValues: {
      email: '',
      confirmEmail: '',
      password: '',
      reason: '',
      understand: false,
      confirmDeletion: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      confirmEmail: (value, values) =>
        value !== values.email ? 'Emails do not match' : null,
      password: (value) => 
        value.length < 6 ? 'Please enter your current password' : null,
      reason: (value) =>
        value.length < 10 ? 'Please provide more details about your request' : null,
      understand: (value) =>
        !value ? 'You must acknowledge this understanding' : null,
      confirmDeletion: (value) =>
        !value ? 'You must confirm the deletion request' : null,
    },
  });

  const handleSubmit = async (values: DeleteDataFormValues) => {
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
    console.log(values);
  };

  if (submitted) {
    return (
      <Alert icon={<IconCheck size={16} />} title="Request Submitted" color="green">
        <Text>
          Your data deletion request has been submitted successfully. You will receive a
          confirmation email with further instructions within 24 hours.
        </Text>
        <Button
          variant="light"
          color="green"
          onClick={() => {
            setSubmitted(false);
            form.reset();
          }}
          mt="md"
        >
          Submit Another Request
        </Button>
      </Alert>
    );
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack pos="relative">
        <LoadingOverlay visible={loading} overlayProps={{ blur: 2 }} />
        
        <TextInput
          required
          label="Email Address"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />

        <TextInput
          required
          label="Confirm Email Address"
          placeholder="your@email.com"
          {...form.getInputProps('confirmEmail')}
        />

        <PasswordInput
          required
          label="Current Password"
          placeholder="Enter your current password"
          {...form.getInputProps('password')}
        />

        <Textarea
          required
          label="Reason for Deletion"
          placeholder="Please explain why you want to delete your data..."
          minRows={3}
          {...form.getInputProps('reason')}
        />

        <Alert icon={<IconAlertCircle size={16} />} color="yellow">
          Please read carefully before proceeding:
          <Text size="sm" mt="xs">
            This action will permanently delete all your data and cannot be undone. Your account
            will be closed and you will lose access to all services.
          </Text>
        </Alert>

        <Checkbox
          label="I understand that this action is permanent and cannot be undone"
          {...form.getInputProps('understand', { type: 'checkbox' })}
        />

        <Checkbox
          label="I confirm that I want to delete all my data"
          {...form.getInputProps('confirmDeletion', { type: 'checkbox' })}
        />

        <Group justify="flex-end" mt="md">
          <Button variant="light" component="a" href="/contact">
            Cancel
          </Button>
          <Button type="submit" color="red" size="md">
            Submit Deletion Request
          </Button>
        </Group>
      </Stack>
    </form>
  );
} 