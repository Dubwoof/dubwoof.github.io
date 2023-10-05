import React, { useEffect } from 'react';
import { BiCog, BiWallet } from 'react-icons/bi';
import { MdOutlineShowChart } from 'react-icons/md';
import type { CashFlowWidgetProps } from './CashFlowWidget.props';
import ReactDOM from 'react-dom';

export function CashFlowWidget({ bgColor = '#cdcdcd', textStyle = 'light' }: CashFlowWidgetProps): JSX.Element {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    function handleOpenModal(): void {
        setIsModalOpen(true);
    }

    function handleCloseModal(): void {
        setIsModalOpen(false);
    }

    useEffect(() => {
        if (isModalOpen) {
            try {
                const parentDoc = window.parent.document;

                // Check if modal already exists in the parent, prevent multiple
                if (parentDoc.getElementById('reactModalRoot')) return;

                const reactModalRoot = parentDoc.createElement('div');
                reactModalRoot.id = 'reactModalRoot';
                parentDoc.body.appendChild(reactModalRoot);

                // Embed your React component into parent document
                const modalComponent = (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={handleCloseModal}>
                        <div className="bg-white p-5 rounded-md text-slate-800">
                            <p>Modal content here.</p>
                            <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded" onClick={handleCloseModal}>
                                Close
                            </button>
                        </div>
                    </div>
                );

                // Use `createRoot` instead of `ReactDOM.render` for React 18+
                const root = ReactDOM.createRoot(reactModalRoot);
                root.render(modalComponent);
            } catch (e) {
                console.error('Failed to inject React component into parent:', e);
            }
        } else {
            try {
                // Cleanup modal from parent when it's closed
                const parentDoc = window.parent.document;
                const reactModalRoot = parentDoc.getElementById('reactModalRoot');

                // To clean up when using createRoot, you should use `root.unmount()`
                if (reactModalRoot?._reactRootContainer) {
                    reactModalRoot?._reactRootContainer.unmount();
                }

                reactModalRoot?.remove();
            } catch (e) {
                console.error('Failed to cleanup React component from parent:', e);
            }
        }
    }, [isModalOpen]);

    return (
        <div className="flex flex-col bg-orange-500 text-white rounded-xl p-2 w-[240px]">
            <div className="flex justify-between mb-1">
                <div className="text-sm font-bold">Möglicher Cash-Flow</div>
                <BiCog className="cursor-pointer" size={20} onClick={handleOpenModal} />
            </div>
            <div className="flex gap-2">
                <div className="bg-white min-w-[50px] min-h-[50px] rounded-xl text-orange-500 flex justify-center items-center">
                    <BiWallet size={40} />
                </div>
                <div className="flex flex-col w-full">
                    <div className="flex items-end justify-between">
                        <div className="text-2xl font-bold">1.200€</div>
                        <div className="text-lg flex items-center">
                            <MdOutlineShowChart />
                            4%
                        </div>
                    </div>
                    <p className="leading-3">p.a.</p>
                </div>
            </div>
        </div>
    );
}
