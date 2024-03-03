export const Contact = () => {
    return (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-900 bg-opacity-30 backdrop-blur-sm">
            <div className="fixed left-[50%] top-[50%] z-[99] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg">
                <div className="flex flex-col space-y-1.5 text-center sm:text-left">
                    <h2 className="text-lg font-semibold leading-none tracking-tight">Biz bilan bog'laning</h2>
                </div>
                <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full my-3"></div>
                <form action="" className="flex w-full flex-col gap-4">
                    <div className="flex w-full flex-col space-y-1">
                        <label htmlFor="" className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-bold">
                            Telegram username
                            <span className="text-blue-500">*</span>
                        </label>
                        <input type="text" className="flex h-10 w-full rounded-md border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-3.5 no-focus paragraph-regular min-h-[56px] border bg-secondary"
                            placeholder="@username" />
                        <p className="text-sm text-muted-foreground mt-2.5 opacity-50">Siz bilan ushbu username yordamida aloqaga chiqishimiz mumkin.</p>
                    </div>
                    <div className="flex w-full flex-col space-y-1">
                        <label htmlFor="" className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-bold">
                            Taklifingiz
                            <span className="text-blue-500">*</span>
                        </label>
                        <textarea name="" id="" className="flex w-full rounded-md border-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-3.5 no-focus paragraph-regular min-h-[100px] border bg-secondary"></textarea>
                        <p className="text-sm text-muted-foreground mt-2.5 opacity-50">Platformani yaxshilash uchun taklifingizni yozing.</p>
                    </div>
                    <button className="items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 flex min-h-[56px] w-full justify-center gap-2 bg-blue-500">
                        Yuborish
                    </button>
                </form>
            </div>
        </div>

    )
}