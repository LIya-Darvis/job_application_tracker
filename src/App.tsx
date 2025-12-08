function App() {
  return (
    <div className="bg-black py-32">
      {/* Header */}
      <div className="flex flex-col justify-center items-center">
        <div className="relative text-center mb-3 mt-5 text-5xl font-medium">
          <h1 className="relative text-white pb-3 leading-[15px] z-10 isolate">Job Application Tracker</h1>
          <div className="absolute left-1/2 bottom-1 -translate-x-1/2 h-20 w-96 bg-blue-600 blur-[30px] z-[1] opacity-50">
          </div>
        </div>
      </div>
      {/* Cards */}
      <div className="flex md:max-w-4xl m-auto">
        <ul className="grid grid-cols-1 gap-y-10 gap-x-6 items-start p-8">

          <li className="relative flex flex-col items-start rounded-lg bg-slate-50">
            <div className="order-1 space-y-4 m-7">
              <h3 className="mb-1 text-slate-900 font-semibold">
                <span className="block text-3xl leading-6 text-indigo-500">Специалист по техподдержке</span>
              </h3>
              <h4 className="mb-1 text-slate-900 font-medium">
                <span className="block text-2xl leading-6 text-white-500">от 35000 р за месяц</span>
              </h4>
              <div className="prose prose-slate prose-sm text-slate-600">
                <p>Длинное описание вакансии: ---=-=0-=-9- .=0- 0- 70.. .. . -809 .-.9.7- -09 -09.- 0.9- 9-09-0 9-. .900- 9-090- 90-0-9.0-.9 </p>
              </div>
            </div>
          </li>

          <li className="relative flex flex-col items-start rounded-lg bg-slate-50">
            <div className="order-1 space-y-4 m-7">
              <h3 className="mb-1 text-slate-900 font-semibold">
                <span className="block text-3xl leading-6 text-indigo-500">Специалист по техподдержке</span>
              </h3>
              <h4 className="mb-1 text-slate-900 font-medium">
                <span className="block text-2xl leading-6 text-white-500">от 35000 р за месяц</span>
              </h4>
              <div className="prose prose-slate prose-sm text-slate-600">
                <p>Длинное описание вакансии: ---=-=0-=-9- .=0- 0- 70.. .. . -809 .-.9.7- -09 -09.- 0.9- 9-09-0 9-. .900- 9-090- 90-0-9.0-.9 </p>
              </div>
            </div>
          </li>

        </ul>
      </div>

    </div>
  );
}

export default App;
