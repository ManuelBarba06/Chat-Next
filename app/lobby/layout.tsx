import UserLink from "./_components/UserLink"

const layout = ({children}:{children: React.ReactNode}) => {
  return (
    <div className="min-h-screen flex fle-col bg-gradient-to-b from-primaryColor from-5% via-white via-10% to-white to-90%">
        <aside className="w-full md:w-96 p-2">
            <h1 className="text-2xl font-bold">Chats</h1>
            <nav>
              <span>Online</span>
              <ul>
                <UserLink/>
              </ul>
              <span>Offline</span>
              <ul>
                <UserLink/>
              </ul>
            </nav>
        </aside>
        {children}
    </div>
  )
}

export default layout