import {createContext, ReactNode, useState} from "react";

interface LocationState {
    location: string,
    updateLocation(location: string): void
}

const locationState = {
    location: '',
    updateLocation: () => {}
}

export const LocationContext = createContext<LocationState>(locationState)

export const LocationContextProvider = ({ children }: {children: ReactNode}) => {
    const [location, setLocation] = useState('')

    const updateLocation = (location: string) => setLocation(location)

    return <LocationContext.Provider value={{location, updateLocation}}>
        {children}
    </LocationContext.Provider>
}