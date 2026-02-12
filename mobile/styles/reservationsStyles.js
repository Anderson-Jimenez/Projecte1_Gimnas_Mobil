import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#f0f2f5', 
    },
    
    wrapper: {
        width: "90%",
        marginHorizontal: "auto",
        paddingVertical: 20,
    },
    
    sectionTitle: {
        fontSize: 28,
        fontWeight: "700",
        color: "#0f172a",
        marginBottom: 20,
        letterSpacing: 0.5,
    },
    
    card: {
        backgroundColor: "#1F2937",
        borderRadius: 20,
        padding: 20,
        marginBottom: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 8,
        borderWidth: 1,
        borderColor: "#374151",
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 12,
    },

    titleContainer: {
        flex: 1,
        marginRight: 12,
    },

    title: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 6,
        letterSpacing: 0.5,
    },

    timeBadge: {
        backgroundColor: "#3b82f6",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 30,
        shadowColor: "#3b82f6",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
    },

    timeText: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "700",
    },

    instructor: {
        color: "#9CA3AF",
        fontSize: 14,
        marginBottom: 16,
        fontWeight: "500",
    },

    infoRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 14,
        paddingHorizontal: 12,
        backgroundColor: "#111827",
        borderRadius: 16,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#374151",
    },

    infoItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },

    infoText: {
        color: "#E5E7EB",
        fontSize: 14,
        fontWeight: "500",
    },

    // ✅ ESTILOS NUEVOS - AÑADE ESTOS
    actionsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
        gap: 12,
    },

    qrBtn: {
        flex: 1,
        backgroundColor: 'rgba(59, 130, 246, 0.15)',
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 14,
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: '#3b82f6',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
    },

    qrText: {
        color: '#3b82f6',
        fontSize: 16,
        fontWeight: '700',
        letterSpacing: 0.5,
    },

    qrBtnDisabled: {
        backgroundColor: 'rgba(156, 163, 175, 0.1)',
        borderColor: '#4B5563',
    },

    qrTextDisabled: {
        color: '#9CA3AF',
    },

    cancelBtn: {
        flex: 1,
        backgroundColor: "rgba(239, 68, 68, 0.15)",
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 14,
        alignItems: "center",
        borderWidth: 1.5,
        borderColor: "#ef4444",
        flexDirection: "row",
        justifyContent: "center",
        gap: 8,
    },

    cancelText: {
        color: "#ef4444",
        fontSize: 16,
        fontWeight: "700",
        letterSpacing: 0.5,
    },

    expiredBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
        paddingTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#374151',
        gap: 8,
    },

    expiredText: {
        color: '#F59E0B',
        fontSize: 14,
        fontWeight: '600',
    },

    emptyContainer: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 60,
        paddingHorizontal: 20,
        backgroundColor: "#1F2937",
        borderRadius: 24,
        marginTop: 20,
    },

    emptyIcon: {
        marginBottom: 16,
    },

    emptyTitle: {
        fontSize: 22,
        fontWeight: "700",
        color: "#fff",
        marginBottom: 8,
    },

    emptyText: {
        fontSize: 16,
        color: "#9CA3AF",
        textAlign: "center",
        lineHeight: 24,
    },

    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 50,
    },

    loadingText: {
        marginTop: 12,
        fontSize: 16,
        color: "#6B7280",
        fontWeight: "500",
    },
    cardUsed: {
        opacity: 0.75,
        backgroundColor: '#111827',
    },
    actionsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
        gap: 12,
    },

    qrBtn: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(59, 130, 246, 0.15)',
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 14,
        borderWidth: 1.5,
        borderColor: '#3b82f6',
        gap: 8,
    },

    qrText: {
        color: '#3b82f6',
        fontSize: 16,
        fontWeight: '700',
        letterSpacing: 0.5,
    },

    cancelBtn: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(239, 68, 68, 0.15)',
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 14,
        borderWidth: 1.5,
        borderColor: '#ef4444',
        gap: 8,
    },

    cancelText: {
        color: '#ef4444',
        fontSize: 16,
        fontWeight: '700',
        letterSpacing: 0.5,
    },

    usedBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
        paddingTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#374151',
        gap: 8,
    },

    usedText: {
        color: '#10B981',
        fontSize: 14,
        fontWeight: '600',
    },

    emptyIcon: {
        marginBottom: 16,
    },
});