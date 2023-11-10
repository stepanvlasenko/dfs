import './BaseAlert.css'
import * as AlertDialog from '@radix-ui/react-alert-dialog'

interface BaseAlertContent {
    buttonContent: React.ReactNode
    title: string
    content: React.ReactNode
    buttonClose: React.ReactNode
}

interface BaseAlertProps {
    data: BaseAlertContent
}

export default function BaseAlert({ data, ...props }: BaseAlertProps) {
    return (
        <AlertDialog.Root {...props}>
            <AlertDialog.Trigger asChild>
                <button className="Button violet">{data.buttonContent}</button>
            </AlertDialog.Trigger>
            <AlertDialog.Portal>
                <AlertDialog.Overlay className="AlertDialogOverlay" />
                <AlertDialog.Content className="AlertDialogContent">
                    <AlertDialog.Title className="AlertDialogTitle">{data.title}</AlertDialog.Title>
                    <AlertDialog.Description asChild className="AlertDialogDescription">
                        {data.content}
                    </AlertDialog.Description>
                    <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
                        <AlertDialog.Cancel asChild>
                            <button className="Button mauve">{data.buttonClose}</button>
                        </AlertDialog.Cancel>
                    </div>
                </AlertDialog.Content>
            </AlertDialog.Portal>
        </AlertDialog.Root>
    )
}