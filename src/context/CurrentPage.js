import React, {createContext} from 'react'

export const PageContext = createContext()
export default function currentPageProvider({children}) {
    return(
        <PageContext.Provider>
            {children}
        </PageContext.Provider>
    )
}