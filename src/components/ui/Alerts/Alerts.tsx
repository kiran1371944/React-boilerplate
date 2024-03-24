/* eslint-disable import/extensions */
import { ReactNode } from 'react';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

type AlertComponentProps = {
  children: ReactNode;
  heading?: string;
  message: string;
  continueText?: string;
  cancelText?: string;
  onCancel?: () => void;
  onOk?: () => void;
};

export function AlertComponent({
  children,
  heading,
  message,
  cancelText = '',
  continueText = '',
  onCancel,
  onOk,
}: AlertComponentProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{heading ?? 'Alert'}</AlertDialogTitle>
          <AlertDialogDescription>{message}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancel}>
            {cancelText ?? 'Cancel'}
          </AlertDialogCancel>
          <AlertDialogAction className="bg-cocogreen-900" onClick={onOk}>
            {continueText ?? 'Continue'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
