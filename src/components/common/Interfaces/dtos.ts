import { ReactNode } from "react";

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: "small" | "medium" | "large" | "extra-large";
    className?: string;
    values?: Object;
    disabled?: boolean;
    children?: string | JSX.Element;
    buttonType?:'button'|'button-disabled'
  }

  export interface IHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    className?: string
    fontWeight?: 'bold' | 'semibold' | 'medium' | 'regular' | 'light' | 'caption' | 'overline'
    values?:Object
  }

  export interface IModalProps {
    buttonText: string;
    modalTitle: string;
    modalBody: string;
    modalCloseText: string;
    modalConfirmText: string;
    animation?: boolean;
    backdropTransition?: string; //
    dialogTransition?: string; //
    size?: 'sm' | 'lg' | 'xl';
    fullscreen?: string | true | undefined;
    centered?: boolean; // Add centered prop
  }

export interface IShadowProps  {
    children?: ReactNode;
    type?: "none" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
    className?: string;
  };


  export interface IBodyProps extends React.HTMLAttributes<HTMLParagraphElement> {
    isInline?: boolean
    color?:
      | 'basic'
      | 'primary'
      | 'error'
      | 'info'
      | 'success'
     
    type?: 'body1' | 'body2' | 'body3' | 'body4'
    fontWeight?: 'bold' | 'semibold' | 'medium' | 'normal'
  }

  export interface IAccordionItem {
    title: string;
    content: string;
    secondTitle?:string;
  }
  export interface AccordionProps {
    items: IAccordionItem[];
  }

  export interface RadioOption {
    name: string;
    value: string;
  }
  
  export interface ToggleButtonExampleProps {
    radios: RadioOption[];
    type: "checkbox" | "radio";
    variant?: "primary" | "outline-primary";
  }

  export interface IconButtonProps {
    icon: React.ReactNode;
    enabled: boolean;
    onClick?: () => void;
    className?: string;
  }


  export interface CustomAlertProps {
    variant:
      | "primary"
      | "success"
      | "danger"
      | "warning"
      | "info"
      | "light"
      | "dark"; // Custom success variant
    dismissible?: boolean;
    onClose?: () => void;
    children?: string | JSX.Element;
    className?: string;
  }
  export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  placeholder?: string
  invalid?: boolean
  ref?: React.Ref<any>
  iconName?: string
  child?: JSX.Element
}

export interface ProgressBarWithTooltipProps {
  progress: number;
  label?: string;
  tooltipPlacement?: "top" | "right" | "bottom" | "left";
  tooltipDelayShow?: number;
  tooltipDelayHide?: number;
}

interface SearchOption {
  value: string;
  label: string;
}

export interface SearchComponentProps {
  options: SearchOption[];
  onSearch: (query: string, selectedOption: string) => void;
}

interface Option {
  value: string;
  label: string;
}

 export interface SelectProps {
  options: Option[];
  value: string;
  onChange: (selectedValue: string) => void;
}
export interface ITabData {
  label?: string | JSX.Element;
  content: JSX.Element;
  disabled?: boolean;
  icon?: string;
}

export interface ITabsProps {
  data: ITabData[];
  variant?: "primary" | "secondary";
  onChange?: (arg: number) => void;
  parentActiveTab?: number;
  border?: boolean;
  scrollbar?: boolean;
}


export interface ToastProps {
  variant: "success" | "error" | "info" | "warning";
  message: string;
  duration?: number; // Duration in milliseconds
  onClose?: () => void;
}
export interface ToggleProps {
  type: 'checkbox' | 'radio' | 'switch';
  label: string;
  id: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
  className?:string
}