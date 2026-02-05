import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#f0f2f5', 
    },
    card: {
        backgroundColor: "#1F2937",
        borderRadius: 16,
        padding: 16,
        width: "90%",
        margin: "auto",
        marginTop: 15,
        marginBottom: 15,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 6,
    },

    title: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "700",
    },

    timeBadge: {
        backgroundColor: "#374151",
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 999,
    },

    timeText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "600",
    },

    instructor: {
        color: "#9CA3AF",
        fontSize: 12,
        marginBottom: 12,
    },

    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    footerItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },

    footerText: {
        color: "#CBD5E1",
        fontSize: 12,
    },

    reservaBtn: {
        backgroundColor: '#ff6b6b', 
        marginTop: 15,
        padding: 7, 
        borderRadius: 12, 
        alignItems: 'center' 
    },

    reservaText: {
        color: 'white',
        fontWeight: 700,
    },
  
    dayText: {
        color: "#000",
        fontWeight: "700",
        textTransform: "capitalize",
        fontSize: 24,
    },

    dayView:{
        flex: 1,
        flexDirection: "row",
        width: "90%",
        margin: "auto",
        justifyContent: "space-between",
        marginVertical: 20,
        alignItems: "center",
    },
});