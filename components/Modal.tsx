import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
    isOpen: boolean;
    onChange: (open: boolean) => void;
    title: string;
    description: string;
    children: React. ReactNode;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onChange,
    title,
    description,
    children
}) => {
    return ( 
        <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-neutral-900/90 backdrop-blur-sm fixed inset-0"/>
                <Dialog.Content className="fixed drop-shadow-md border border-neutral-700 top-[50%] md:top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 max-h-[70%] h-auto md:h-auto md:max-h-[90vh] w-11/12 md:w-[90vw] md:max-w-[450px] rounded-md bg-neutral-800 p-6 focus:outline-none">
                    <Dialog.Title className="text-center text-xl font-bold mb-4 md:mb-2">
                        {title}
                    </Dialog.Title>
                    <Dialog.Description className="mb-5 text-sm leading-normal text-center">
                        {description}
                    </Dialog.Description>
                    <div>
                        {children}
                    </div>
                    <Dialog.Close asChild>
                        <button className="text-neutral-400 hover:text-white absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center rounded-full focus:outline-none">
                            <IoMdClose size={25} />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
     );
}
 
export default Modal;