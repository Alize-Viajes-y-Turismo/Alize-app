const tabNavigatorOptions = {
    screenOptions: ({ route }) => ({
        tabBarActiveTintColor: '#FC3232',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
            margin: 20, // Margen horizontal
            height: 80,
            borderRadius: 20,
            justifyContent: 'center'
        },
        tabBarIcon: ({ color }) => screenOptions(route, color),
    })
}


export default tabNavigatorOptions