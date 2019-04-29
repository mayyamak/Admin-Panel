import {capilizeString} from './string'
import { language, ln, dir } from './language'

export const errors = {
  admin: {
    0: {fa: 'خطایی از سمت سرور رخ داده است', en: ''},
    403: {fa: 'کاربر خارج شده است', en: 'User is logout'},
    //user

    100001: {fa: 'کاربر یافت نشد', en: 'Could not find user',},
    100002: {fa: 'نمی‌توان کاربر را فعال کرد', en: 'Could not activate user',},
    100004: {fa: 'رمز عبور اشتباه است', en: 'Password is incorrect',},
    100006: {fa: 'ایمیل نمی‌تواند خالی باشد', en: 'Email can not be null',},
    100007: {fa: 'کاربر وجود دارد', en: 'User already exists',},
    100009: {fa: 'ایمیل یافت نشد', en: 'Email does not exist',},
    1000010: {fa: 'ایمیل وجود ندارد', en: 'Email does not exist',},
    1000017: {fa: 'رمز عبوری را انتخاب کنید که قبلا توسط شما انتخاب نشده باشد', en: 'Choose a password that you haven\'t previously used with this account',},
    1000018: {fa: 'نام در مقدار ورودی وجود ندارد', en: 'Name is missing in input value',},
    1000019: {fa: 'نام خانوادگی در مقدار ورودی وجود ندارد', en: 'Family is missing in input value',},
    1000020: {fa: 'اطلاعات کاربر مطابق الگو نیست', en: 'User information does not comply with pattern',},
    1000022: {fa: 'کاربر فعال شده است', en: 'User is already activated',},
    1000023: {fa: 'نام کاربری نمی‌تواند خالی باشد', en: 'Username can not be null',},
    1000024: {fa: 'کاربر پیدا نشد', en: 'User not found',},

    //config
    410001: {fa: 'تنظیمات چک شود', en: 'Check web server config unpack war'},
    410002: {fa: 'خطای ورودی خروجی', en: 'I/O Exception'},

  }
}
export const getErrorMessage = (errorCode, errors, isCwsError, errorMessage) => {
  const key = 'admin'
  const err = errors[key][errorCode]? errors[key][errorCode][language.key] : (errorMessage || errors[key][0][language.key])
  return capilizeString(err)

}
