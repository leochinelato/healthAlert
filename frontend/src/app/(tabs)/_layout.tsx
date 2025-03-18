import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome"

const TabLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#2d2d2d',
                headerShown: false
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Today',
                    tabBarIcon: ({ color }) => <FontAwesome size={24} name="check-circle" color={color} />
                }}
            />
            <Tabs.Screen
                name="calendar"
                options={{
                    title: 'Calendar',
                    tabBarIcon: ({ color }) => <FontAwesome size={24} name="calendar" color={color} />
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => <FontAwesome size={24} name="user-circle" color={color} />
                }}
            />
        </Tabs>
    )
}

export default TabLayout;