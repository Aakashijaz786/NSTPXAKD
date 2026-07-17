import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { CheckCircle, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { submitApplication } from '../../services/applicationService';
import Button from '../ui/Button';

const schema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please provide a valid email address'),
  teamName: z.string().optional(),
  stage: z.enum(['idea-mvp', 'launch', 'scaling'], {
    errorMap: () => ({ message: 'Please select a stage' }),
  }),
  projectDescription: z
    .string()
    .min(20, 'Please describe your project in at least 20 characters')
    .max(300, 'Keep it under 300 characters'),
  prototypeLink: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  hearAboutUs: z.string().optional(),
});

function Field({ label, error, children, required }) {
  return (
    <div>
      <label className="label-base">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      {children}
      {error && <p className="error-text">{error}</p>}
    </div>
  );
}

export default function ApplicationForm({ selectedStage, onStageChange }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { stage: selectedStage || '' },
  });

  const description = watch('projectDescription', '');

  useEffect(() => {
    if (selectedStage) {
      setValue('stage', selectedStage);
    }
  }, [selectedStage, setValue]);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await submitApplication(data);
      setSubmitted(true);
      toast.success('Application submitted!');
    } catch (err) {
      const msg =
        err?.response?.data?.message || 'Something went wrong. Please try again.';
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="apply" className="bg-dark py-20">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="font-bold text-white mb-3" style={{ fontSize: 'clamp(28px, 4vw, 36px)' }}>
            Ready to apply?
          </h2>
          <p className="text-lg" style={{ color: '#9EBF6A' }}>
            Takes about 10 minutes. No cost, no obligation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-form mx-auto bg-dark-card border border-dark-border rounded-[16px] p-8 md:p-12"
        >
          {submitted ? (
            <div className="flex flex-col items-center text-center gap-5 py-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                <CheckCircle size={36} className="text-accent" />
              </div>
              <div>
                <h3 className="text-white font-bold text-2xl mb-2">Application received!</h3>
                <p className="text-text-muted text-sm leading-relaxed max-w-sm">
                  We&apos;ll review your submission and get back to you within a few weeks.
                  Check your inbox for a confirmation.
                </p>
              </div>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-accent text-sm font-medium hover:underline mt-2"
              >
                Back to home
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
              <Field label="Full name" error={errors.fullName?.message} required>
                <input
                  {...register('fullName')}
                  type="text"
                  placeholder="Your full name"
                  className="input-base"
                  aria-invalid={!!errors.fullName}
                />
              </Field>

              <Field label="Email" error={errors.email?.message} required>
                <input
                  {...register('email')}
                  type="email"
                  placeholder="you@example.com"
                  className="input-base"
                  aria-invalid={!!errors.email}
                />
              </Field>

              <Field label="Team / company name" error={errors.teamName?.message}>
                <input
                  {...register('teamName')}
                  type="text"
                  placeholder="Leave blank if solo"
                  className="input-base"
                />
              </Field>

              <Field label="Stage" error={errors.stage?.message} required>
                <select
                  {...register('stage')}
                  className="input-base"
                  aria-invalid={!!errors.stage}
                  onChange={(e) => {
                    onStageChange?.(e.target.value);
                  }}
                >
                  <option value="">Select your stage…</option>
                  <option value="idea-mvp">Idea / MVP</option>
                  <option value="launch">Launch Stage</option>
                  <option value="scaling">Scaling &amp; Growth</option>
                </select>
              </Field>

              <Field
                label="What are you building?"
                error={errors.projectDescription?.message}
                required
              >
                <textarea
                  {...register('projectDescription')}
                  rows={4}
                  placeholder="Describe in 1–2 sentences"
                  className="input-base resize-none"
                  aria-invalid={!!errors.projectDescription}
                />
                <p className="text-right text-xs text-text-muted mt-1">
                  {description.length} / 300
                </p>
              </Field>

              <Field
                label="Link to prototype, deck, or video"
                error={errors.prototypeLink?.message}
              >
                <input
                  {...register('prototypeLink')}
                  type="url"
                  placeholder="https://..."
                  className="input-base"
                />
              </Field>

              <Field label="How did you hear about this program?" error={errors.hearAboutUs?.message}>
                <select {...register('hearAboutUs')} className="input-base">
                  <option value="">Select an option…</option>
                  <option value="nerc-university">NERC / university network</option>
                  <option value="social-media">Social media</option>
                  <option value="friend-colleague">Friend or colleague</option>
                  <option value="akd-network">AKD Group network</option>
                  <option value="nstp-network">NSTP network</option>
                  <option value="other">Other</option>
                </select>
              </Field>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full mt-2"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Submitting…
                  </>
                ) : (
                  'Submit application'
                )}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
