export function hasExpired(ttl: number) {
    const getCurrentDateInSec = Math.round(Date.now() / 1000);

    return getCurrentDateInSec >= ttl;
}
