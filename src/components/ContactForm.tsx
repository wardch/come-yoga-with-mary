'use client';
import {useState} from 'react';
import {z} from 'zod';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Label} from '@/components/ui/label';
import {Alert, AlertDescription} from '@/components/ui/alert';

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

export default function ContactForm() {
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {name: '', email: '', message: ''},
  });
  const formspreeAction = process.env.NEXT_PUBLIC_FORMSPREE_ACTION;

  const onSubmit = async (values: z.infer<typeof schema>) => {
    if (status === 'submitting') return;
    setStatus('submitting');
    if (formspreeAction) {
      try {
        const res = await fetch(formspreeAction, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            message: values.message,
          }),
        });
        if (!res.ok) throw new Error('Failed');
        setStatus('success');
        form.reset();
      } catch {
        setStatus('error');
      }
      return;
    }
    const subject = encodeURIComponent('Candle Yoga enquiry');
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`
    );
    window.location.href = `mailto:charlieward18@gmail.com?subject=${subject}&body=${body}`;
    setStatus('success');
    form.reset();
  };

  return (
    <div className="w-full max-w-xl">
      {status === 'success' && (
        <Alert className="mb-4">
          <AlertDescription>
            Thanks for reaching out. Well get back to you soon.
          </AlertDescription>
        </Alert>
      )}
      {status === 'error' && (
        <Alert className="mb-4" variant="destructive">
          <AlertDescription>
            Something went wrong. Please try again or email directly.
          </AlertDescription>
        </Alert>
      )}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            {...form.register('name')}
            disabled={status === 'submitting'}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            {...form.register('email')}
            disabled={status === 'submitting'}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            rows={5}
            {...form.register('message')}
            disabled={status === 'submitting'}
            required
          />
        </div>
        <Button type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending...' : 'Send'}
        </Button>
      </form>
    </div>
  );
}
