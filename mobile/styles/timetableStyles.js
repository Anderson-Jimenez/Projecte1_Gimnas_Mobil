import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#F3F3F3', 
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

    loadingView: {
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
    },

    loadingText: {
        color: "#000",
        fontSize: 24,
    },

    pickerWrapper: {
        flex: 1,
        flexDirection: "row",
        width: "90%",
        marginTop: 15,
        justifyContent: "space-between", 
        margin: "auto",
    },

    picker: {
        height: 40, // Alçada còmoda per tocar amb el dit
        color: '#000', // Text blanc per al dia seleccionat
        width: '48%',
        borderWidth: 0,
        borderBottomWidth: 1,
    },
    cardFull: {
        backgroundColor: '#fff1f0',
        borderWidth: 2,
        borderColor: '#ff4d4f',
        shadowColor: '#ff4d4f',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    timeBadgeFull: {
        backgroundColor: '#ff4d4f',
        borderColor: '#ff4d4f',
    },
    timeTextFull: {
        color: 'white',
        fontWeight: 'bold',
    },
    fullBtn: {
        backgroundColor: '#ff4d4f',
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        shadowColor: '#ff4d4f',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 4,
    },
    fullText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    emptyView: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 60,
        paddingHorizontal: 20,
    },
    emptyText: {
        fontSize: 18,
        color: '#64748b',
        marginTop: 15,
        textAlign: 'center',
        fontWeight: '500',
    },
});