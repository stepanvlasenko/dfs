import React from 'react';
import './BaseAccordion.css'
import * as Accordion from '@radix-ui/react-accordion';

/** 
 * type props extends RadixAccordionProps = {
 *  elements: IAccordionItem[]
 * }
 * interface IAccordionItem {
 *  title: React.ReactNode,
 *  content: React.ReactNode
 * }
*/
interface IAccordionItem {
    title: React.ReactNode
    content: React.ReactNode
}

interface BaseAccordionProps {
    elements: IAccordionItem[]
}

export default function BaseAccordion(props: BaseAccordionProps) {
    const AccordionItems = props.elements.map((v, i) => (
            <Accordion.Item className="AccordionItem" value={'' + i} key={i}>
                <AccordionTrigger children={v.title}></AccordionTrigger>
                <AccordionContent children={v.content}></AccordionContent>
            </Accordion.Item>
        )
    )

    return (
        <Accordion.Root className='AccordionRoot' type='single' collapsible>
            {AccordionItems}
        </Accordion.Root>
        )
}

interface AccordionRefProps {
    children: React.ReactNode
    className?: string
}

const AccordionTrigger = React.forwardRef(({ children, className = '', ...props }: AccordionRefProps, forwardedRef: React.ForwardedRef<HTMLButtonElement>) => (
    <Accordion.Header className="AccordionHeader">
        <Accordion.Trigger
            className={`AccordionTrigger ${className}`}
            {...props}
            ref={forwardedRef}
        >
            {children}
        </Accordion.Trigger>
    </Accordion.Header>
));

const AccordionContent = React.forwardRef(({ children, className, ...props }: AccordionRefProps, forwardedRef: React.ForwardedRef<HTMLDivElement>) => (
    <Accordion.Content
        className={`AccordionContent ${className}`}
        {...props}
        ref={forwardedRef}
    >
        <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
));