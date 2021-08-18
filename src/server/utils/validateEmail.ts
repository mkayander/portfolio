/**
 * @param email Email address to test.
 * @return true if email is valid.
 */
const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

export default validateEmail;
