import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#f0f2f5', 
    },

    wrapper: {
        width: "90%",
        margin: "auto",
        marginTop: 15,
        marginBottom: 15,
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: "700",
        color: "#111827",
        marginBottom: 12,
    },

    card: {
        backgroundColor: "#1F2937",
        borderRadius: 24,
        padding: 20,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 16,
    },

    title: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "700",
    },

    instructor: {
        color: "#9CA3AF",
        fontSize: 13,
        marginTop: 4,
    },

    timeBadge: {
        backgroundColor: "#374151",
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 14,
    },

    timeText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "700",
    },

    infoRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },

    infoItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },

    infoText: {
        color: "#CBD5E1",
        fontSize: 13,
    },

    cancelBtn: {
        backgroundColor: "#FF6363",
        borderRadius: 16,
        paddingVertical: 16,
        alignItems: "center",
    },

    cancelText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "700",
    },

});