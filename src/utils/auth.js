/**
 * Utilitários para gerenciamento seguro de tokens de autenticação
 */

export function getAuthToken() {
    if (typeof document === 'undefined') return null;
    const match = document.cookie.match(/(?:^|;\s*)token=([^;]*)/);
    return match ? decodeURIComponent(match[1]) : null;
}

export function setAuthToken(token) {
    if (typeof document === 'undefined') return;
    const isSecure = window.location.protocol === 'https:';
    const secureFlag = isSecure ? '; Secure' : '';
    document.cookie = `token=${encodeURIComponent(token)}; path=/; SameSite=Lax${secureFlag}`;
}

export function removeAuthToken() {
    if (typeof document === 'undefined') return;
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax';
}
