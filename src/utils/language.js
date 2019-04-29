import {uncapilizeString} from './string'

export const ln = (message) => {
  if (!message || typeof(message) != 'string') return message
  if (language && language.messages) {
    if (!language.messages[message]) {
      return language.messages[message.toLowerCase()] && language.messages[message.toLowerCase()][language.key] || message
    }
    return language.messages[message][language.key]
  }
}
export const dir = (dir) => {
  return language && language[dir] && language[dir][language.key] || dir
}
export const swip = (str1, str2) => {
  if(language.key == 'fa') {
    return ln(str1) + " " + ln(str2)
  }
  else {
    return ln(str2) + " " + ln(str1)
  }
}
export const language = {
  key: localStorage && localStorage.getItem('language') && localStorage.getItem('language').toLowerCase() || 'fa',
  locale: {fa: 'fa-IR', en: 'en-US'},
  direction: {fa: 'rtl', en: 'ltr'},
  align: {fa: 'right', en: 'left'},
  reverseAlign: {fa: 'left', en: 'right'},
  margin: {fa: 'marginRight', en: 'marginLeft'},
  name: {fa: 'farsi', en: 'english'},
  messages: {
    // general
    login: {fa: 'ورود', en: 'Login'},
    online: {fa: 'آنلاین', en: 'Online'},
    loading: {fa: 'در حال بارگیری', en: 'Loading'},
    dashboard: {fa: 'داشبورد', en: 'Dashboard'},
    controlPanel: {fa: 'پنل مدیریتی', en: 'Control panel'},
    home: {fa: 'خانه', en: 'Home'},
    moreinfo: {fa: 'اطلاعات بیشتر', en: 'More info'},
    about: {fa: 'درباره', en: 'About'},
    aboutus: {fa: 'درباره ما', en: 'About Us'},
    username: {fa: 'نام کاربر', en: 'Username'},
    email: {fa: 'ایمیل', en: 'Email'},
    verified: { fa: 'تایید شده', en: 'Verified' },
    enabled: { fa: 'فعال شده', en: 'Enabled' },
    userType: { fa: 'نوع کاربر', en: 'User type' },
    language: {fa: 'زبان', en: 'Language'},
    select: {fa: 'انتخاب', en: 'Select'},
    name: {fa: 'نام', en: 'Name'},
    category: {fa: 'دسته', en: 'Category'},
    default: {fa: 'پیش فرض', en: 'Default'},
    active: {fa: 'فعال', en: 'Active'},
    close: {fa: 'بستن', en: 'Close'},
    cancel: {fa: 'انصراف', en: 'Cancel'},
    delete: {fa: 'حذف', en: 'Delete'},
    edit: {fa: 'ویرایش', en: 'Edit'},
    add: {fa: 'افزودن', en: 'Add'},
    update: {fa: 'به‌روز رسانی', en: 'Update'},
    irr: {fa: 'ریال', en: 'IRR'},
    date: {fa: 'تاریخ', en: 'Date'},
    charts: {fa: 'نمودارها', en: 'Charts'},
    chart: {fa: 'نمودار', en: 'chart'},
    noChartData: {fa: 'بدون داده', en: 'No Chart Data'},
    search: {fa: 'جستجو', en: 'Search'},
    advancedSearch: {fa: 'جستجوی پیشرفته', en: 'Advanced Search'},
    next: {fa: 'بعدی', en: 'Next'},
    previous: {fa: 'قبلی', en: 'Previous'},
    first: {fa: 'اول', en: 'First'},
    last: {fa: 'آخر', en: 'Last'},
    signout: {fa: 'خروج', en: 'Sign out'},
    profile: {fa: 'پروفایل', en: 'Profile'},
    membersince: {fa: 'عضو از‌', en: 'Member since'},
    user: {fa: 'کاربر', en: 'User'},
    problem: {fa: 'مشکل', en: 'Problem'},
    submit: {fa: 'ثبت', en: 'Submit'},
    show: {fa: 'نمایش', en: 'Show'},
    id: {fa: 'شناسه', en: 'ID'},
    firstname: {fa: 'نام', en: 'FIrstname'},
    lastname: {fa: 'نام خانوادگی', en: 'Lastname'},
    amount: {fa: 'مقدار', en: 'Amount'},
    createdDate: {fa: 'تاریخ ایجاد', en: 'Created Date'},
    invoice: {fa: 'فاکتور', en: 'Invoice'},
    referenceId: {fa: 'شماره مرجع', en: 'Reference Id'},
    description: {fa: 'توضیحات', en: 'Description'},
    onlineSupport: {fa: 'پشتیبانی آنلاین', en: 'Online Support'},

    //GeneralList
    no: {fa: 'خیر', en: 'No'},
    yes: {fa: 'بله', en: 'Yes'},
    number: {fa: 'شماره', en: 'No.'},
    showing: {fa: 'نمایش', en: 'Showing'},
    to: {fa: 'تا', en: 'to'},
    of: {fa: 'از', en: 'of'},
    entries: { fa: 'موجودیت', en: 'entries'},
    noDataIsAvailable: {fa: 'داده‌ای برای نمایش وجود ندارد', en: 'No data is available to display'},
    day: {fa: 'روزانه', en: 'Day'},
    month: {fa: 'ماهانه', en: 'Month'},
    tmonth: {fa: 'سه ماهه', en: 'Three months'},
    smonth: {fa: 'شش ماهه', en: 'Six months'},
    nmonth: {fa: 'نه ماهه', en: 'Nine months'},
    year: {fa: 'سالانه', en: 'Year'},
    business: {fa: 'حقوقی', en: 'Business'},
    individual: {fa: 'حقیقی', en: 'Individual'},

    //App
    mainNavigation: {fa: 'منوی مدیریتی', en: 'MAIN NAVIGATION'},
    users: {fa: 'کاربران', en: 'Users'},
    groups: {fa: 'گروه‌ها', en: 'Groups'},
    productInvoices: {fa: 'صورتحساب‌های محصول', en: 'Product Invoices'},
    allInvoices: {fa: 'همه صورتحساب‌ها', en: 'All Invoices'},
    draftInvoices: {fa: 'پیش فاکتورها', en: 'Draft Invoices'},
    pendingInvoices: {fa: 'در انتظار تایید', en: 'Pending Invoices'},
    rejectInvoices: {fa: 'رد شده', en: 'Reject Invoices'},
    paidInvoices: {fa: 'پرداخت شده', en: 'Paid Invoices'},
    authorization: {fa: 'اعتبار سنجی', en: 'Authorization'},
    addNewUser: { fa: 'افزودن کاربر جدید', en: 'Add new user'},
    support: {fa: 'پشتیبانی', en: 'Support'},

    //Dashboard
    invoices: {fa: 'صورتحساب‌ها', en: 'Invoices'},
    all: {fa: 'همه', en: 'All'},
    pending: {fa: 'در انتظار تایید', en: 'Pending'},
    paid: {fa: 'پرداخت شده', en: 'Paid'},
    unpaid: {fa: 'پرداخت نشده', en: 'Not Paid'},
    reject: {fa: 'رد شده', en: 'Reject'},
    newUser: {fa: 'کاربر جدید', en: 'New User'},

    //General List
    revenueReport: {fa: 'دریافت گزارش', en: 'Revenue Report'},
    resort: {fa: 'اقامتگاه', en: 'Resort'},
    transaction: {fa: 'تراکنش', en: 'Transaction'},
    review: {fa: 'نظرسنجی', en: 'Review'},

    //Users Page
    registered: {fa: 'ثبت نام شده', en: 'Registered'},

    //User Page
    userInformation: {fa: 'اطلاعات کاربر', en: 'User Information'},
    userData: {fa: 'داده کاربر', en: 'User Data'},
    userAuthorization: {fa: 'اعتبارسنجی کاربر', en: 'User Authorization'},
    transactions: {fa: 'تراکنش‌ها', en: 'Transactions'},
    manageUsers: { fa: 'مدیریت کاربران', en: 'Manage Users' },
    changeQuota: { fa: 'تغییر حجم', en: 'Change quota' },
    userIsRejected: {fa: 'کاربر توسط شما رد شده است', en: 'The user has been rejected by you'},
    requestOf: {fa: 'درخواست', en: 'Request of'},
    rejectReason: {fa: 'دلیل رد', en: 'Reject reason'},
    acceptedUser: {fa: 'پذیرش اعتبارسنجی کاربر', en: 'User authorization Acceptance'},
    rejectedUser: {fa: 'رد اعتبارسنجی کاربر', en: 'User authorization Rejection'},
    doneSuccessfully: {fa: 'با موفقیت انجام شد', en: 'is successfully done'},
    profileId: {fa: 'شناسه پروفایل', en: 'Profile Id'},
    userProfile: { fa: ' پروفایل کاربر', en: 'User profile' },
    companyInformation: {fa: 'اطلاعات شرکت', en: 'Company Information'},
    customerType: {fa: 'نوع مشتری', en: 'Customer Type'},
    company: {fa: 'شرکت', en: 'Company'},
    companyName: {fa: 'نام شرکت', en: 'Company name'},
    companyNationalCode: { fa: 'شناسه ملی شرکت', en: 'Company Id'},
    companyStaffCount: { fa: 'تعداد کارکنان', en: 'Number of Staff'},
    businessCode: {fa: 'شماره اقتصادی', en: 'Business Code'},
    registerNo: {fa: 'شماره ثبت', en: 'Register Number'},
    firstName: {fa: 'نام', en: 'First name'},
    lastName: {fa: 'نام خانوادگی', en: 'Last name'},
    balance: {fa: 'اعتبار', en: 'Balance'},
    group: {fa: 'گروه', en: 'Group'},
    mobile: {fa: 'تلفن همراه', en: 'Mobile'},
    mobileverified: {fa: 'تایید تلفن همراه', en: 'Mobile verified'},
    verificationCode: {fa: 'کد تایید', en: 'Verification code'},
    phone: {fa: 'تلفن', en: 'Phone'},
    fax: {fa: 'نمابر', en: 'Fax'},
    address: {fa: 'نشانی', en: 'Address'},
    city: {fa: 'شهر', en: 'City'},
    postalCode: {fa: 'کدپستی', en: 'Postal Code'},
    province: {fa: 'استان', en: 'Province'},
    nationalId: {fa: 'شماره ملی', en: 'National Id'},
    sendMessage: {fa: 'ارسال پیام', en: 'Send message'},
    payable: { fa: 'قابل پرداخت', en: 'Payable' },
    status: { fa: 'وضعیت', en: 'Status' },
    cadmin: {fa: 'نماینده', en: 'admin'},

    //User Authorization page
    userIsNow: {fa: 'کاربر', en: 'User is'},
    activated: {fa: 'فعال', en: 'Activated'},
    deactivated: {fa: 'غیر فعال', en: 'Deactivated'},

    //َUser Transactions
    updateBalance: {fa: 'به‌روزرسانی اعتبار', en: 'Update balance'},

    //Groups page
    addGroup: {fa: 'افزودن گروه', en: 'Add group'},

    //TrGroup
    adminInvoices: {fa: 'صورتحساب‌های مدیر', en: 'Admin invoices'},

    adminUser: {fa: 'کاربر مدیر', en: 'Admin user'},
    planName: {fa: 'نام طرح', en: 'Plan name'},

    //UpgradeGroupPage
    upgrade: {fa: 'ارتقا', en: 'Upgrade'},

    //Table headers
    from: {fa: 'از', en: 'From'},
    to: {fa: 'تا', en: 'to'},
    createdate: { fa: 'تاریخ ایجاد', en: 'Create date' },
    paiddate: { fa: 'تاریخ پرداخت', en: 'Paid date' },
    period: { fa: 'دوره زمانی', en: 'Period' },
    startdate: { fa: 'تاریخ شروع', en: 'Start date' },
    enddate: { fa: 'تاریخ پایان', en: 'End date' },
    created: { fa: 'تاریخ ایجاد', en: 'Created date' },
    source: { fa: 'منبع', en: 'Source' },
    destination: { fa: 'مقصد', en: 'Destination' },

    //formFields
    password: { fa: 'رمز عبور', en: 'Password' },
    location: { fa: 'محل', en: 'Location' },
    fromDate: { fa: 'از تاریخ', en: 'From Date' },
    toDate: { fa: 'تا تاریخ', en: 'To Date' },
    dueDate: { fa: 'تاریخ تحویل', en: 'Due Date' },
    payStatus: { fa: 'وضعیت پرداخت', en: 'Pay Status' },
    addBalance: { fa: 'افزودن اعتبار', en: 'Add Balance' },
    newBalance: { fa: 'اعتبار جدید', en: 'New Balance' },
    verifyCode: { fa: 'کد تایید', en: 'Verify code' },
    authorized: { fa: 'معتبر', en: 'Authorized' },
    refCode: { fa: 'کد ارجاع', en: 'Ref Code' },
    productName: { fa: 'نام محصول', en: 'Product name' },
    startDateFrom: { fa: 'تاریخ شروع (از)', en: 'Start date (from)' },
    startDateTo: { fa: 'تاریخ شروع (تا)', en: 'Start date (to)' },
    endDateFrom: { fa: 'تاریخ پایان (از)', en: 'End date (from)' },
    endDateTo: { fa: 'تاریخ پایان (تا)', en: 'End date (to)' },
    paidDateFrom: { fa: 'تاریخ پرداخت (از)', en: 'Paid date (from)' },
    paidDateTo: { fa: 'تاریخ پرداخت (تا)', en: 'Paid date (to)' },
    createdDateFrom: { fa: 'تاریخ ایجاد (از)', en: 'Created date (from)' },
    createdDateTo: { fa: 'تاریخ ایجاد (تا)', en: 'Created date (to)' },
    payablePrice: { fa: 'قیمت قابل پرداخت', en: 'Payable Price' },
    trackNo: { fa: 'شماره پیگیری', en: 'Track No' },
    vmState: { fa: 'حالت سیستم', en: 'VPS State' },
    priceInfo: { fa: 'اطلاعات قیمت', en: 'Price Info' },
    jsonInfo: { fa: 'اطلاعات Json', en: 'Json Info' },
    type: { fa: 'نوع', en: 'Type' },
    required: { fa: 'ضروری', en: 'Required' },
    componentOrder: { fa: 'ترتیب', en: 'Component Order' },
    frequencyMeasure: { fa: 'اندازه تکرار', en: 'Frequency Measure' },
    valueApplication: { fa: 'ارزش مقدار', en: 'Value Application' },
    title: { fa: 'عنوان', en: 'Title' },
    calculationType: { fa: 'نوع محاسبه', en: 'Calculation Type' },
    lowerBound: { fa: 'کران پایین', en: 'Lower Bound' },
    upperBound: { fa: 'کران بالا', en: 'Upper Bound' },
    value: { fa: 'مقدار', en: 'Value' },
    value2: { fa: 'مقدار ۲', en: 'Value2' },
    editProduct: { fa: 'ویرایش محصول', en: 'Edit Product' },

    //Commands
    commands: { fa: 'دستورات اجرایی', en: 'Commands' },

    //NoAccess
    noaccess: {fa: 'دسترسی شما هنوز در سامانه تعریف نشده است', en: 'Your access is not defined in the system yet'},

    changePassword: {fa: 'تغییر گذرواژه', en: 'Change Password'},
    currentPassword: {fa: 'گذرواژه', en: 'Old Password'},
    newPassword: {fa: 'گذرواژه جدید', en: 'New Password'},
    passwordIsNotStrong: {fa: 'گذرواژه جدید قوی نیست', en: 'New Password is not strong'},
    changePasswordSuccess: {fa: 'گذرواژه با موفقیت تغییر یافت', en: 'Password is successfully changed'},
    userProfileProblem: {fa: 'اطلاعات پروفایل کاربر هنوز کامل نشده است', en: 'User profile information is not completed yet'},
    allUsers: {fa: 'همه کاربران', en: 'All users'},
    businessUsers: {fa: 'نمایندگان شرکت', en: 'Business'},
    individualUsers: {fa: 'اشخاص', en: 'Individual'},
    registrationDate: {fa: 'تاریخ عضویت', en: 'Registration Date'},

    isEnabled: {fa: 'فعال', en: 'Enabled'},
    isRegistered: {fa: 'ثبت‌نام', en: 'Registered'},
    hasProfile: {fa: 'پروفایل', en: 'Profile'},
    isAuthorized: {fa: 'تایید', en: 'Authorized'},
    hasPlan: {fa: 'طرح', en: 'Plan'},

    // location
    gpsLocation: {fa: 'مکان GPS', en: 'GPS Location'},
    locations: {fa: 'مکان‌ها', en: 'locations'},
    location: {fa: 'مکان', en: 'location'},
    locationName: {fa: 'نام مکان', en: 'location name'},
    addLocation: {fa: 'افزودن مکان', en: 'Add location'},
    addNewLocation: {fa: 'افزودن مکان جدید', en: 'Add new location'},
    newLocation: {fa: 'مکان جدید', en: 'New Location'},
    latitude: {fa: 'عرض جغرافیایی', en: 'Latitude'},
    longitude: {fa: 'طول جغرافیایی', en: 'Longitude'},
    touristAttractions: {fa: 'مکان‌های دیدنی', en: 'Tourist Attraction'},

    // resort
    resortName: {fa: 'عنوان اقامتگاه', en: 'Resort Title'},
    resortType: {fa: 'نوع اقامتگاه', en: 'Type'},
    houseName: {fa: 'نام خانه', en: 'House Name'},
    resorts: {fa: 'اقامتگاه‌ها', en: 'resorts'},
    houses: {fa: 'خانه‌ها', en: 'houses'},
    refereceId: {fa: 'شناسه مرجع', en: 'Reference Id'},
    payIdentifier: {fa: 'شناسه پرداخت', en: 'Pay Identifier'},
    ownerId: {fa: 'شناسه میزبان', en: 'OwnerId'},
    features: {fa: 'مشخصات', en: 'Features'},
    facilities: {fa: 'امکانات', en: 'Facilities'},
    summary: {fa: 'معرفی اقامتگاه', en: 'Summary'},
    bedroomCount: {fa: 'تعداد اتاق', en: 'Bedroom Count'},
    bedCount: {fa: 'تعداد تخت', en: 'Bed Count'},
    minGuestCount: {fa: 'کمترین ظرفیت', en: 'Min Guest Count'},
    maxGuestCount: {fa: 'بیشترین ظرفیت', en: 'Max Guest Count'},
    perNightPrice: {fa: 'هزینه هر شب اقامت', en: 'Per Night Price'},
    restroom: {fa: 'توالت فرنگی', en: 'Restroom'},
    bathroom: {fa: 'حمام', en: 'Bathroom'},
    elevator: {fa: 'آسانسور', en: 'Elevator'},
    internet: {fa: 'اینترنت', en: 'Internet'},
    parking: {fa: 'پارکینگ', en: 'Parking'},
    television: {fa: 'تلویزیون', en: 'TV'},
    pool: {fa: 'استخر', en: 'Pool'},
    kitchen: {fa: 'آشپزخانه', en: 'Kitchen'},
    cooler: {fa: 'سرمایش', en: 'Cooler'},
    heater: {fa: 'گرمایش', en: 'Heater'},
    iron: {fa: 'اتو', en: 'Iron'},
    guard: {fa: 'نگهبان', en: 'Guard'},

    // booking
    nightsCount: {fa: 'تعداد شب', en: 'Nights Count'},
    checkIn: {fa: 'ورود', en: 'Check In'},
    checkOut: {fa: 'خروج', en: 'Check Out'},
    bookingInfo: {fa: 'نوع رزرو', en: 'Booking Info'},

    // reviews
    reviews: {fa: 'نظرسنجی', en: 'Reviews'},
    rate: {fa: 'رتبه', en: 'Rate'},
    reviewer: {fa: 'کاربر', en: 'Reviewer'},
    target: {fa: 'میزبان', en: 'Target'},
    comment: {fa: 'نطر داده شده', en: 'Comment'},

    // SideBar
    guests: {fa: 'مهمان‌ها', en: 'Guests'},
    hosts: {fa: 'میزبان‌ها', en: 'Hosts'},
    guest: {fa: 'مهمان', en: 'Guest'},
    host: {fa: 'میزبان', en: 'Host'},
    credit: {fa: 'اعتبار مالی', en: 'Credit'},
    credits: {fa: 'اعتبارات مالی', en: 'Credits'},
    city: {fa: 'شهر', en: 'City'},
    cities: {fa: 'شهرها', en: 'Cities'},
    booking: {fa: 'رزرو', en: 'Booking'},
    bookings: {fa: 'رزروها', en: 'Bookings'},

    // User page
    UserUsers: {fa: 'کاربران زیرمجموعه', en: 'Group Users'},
    country: {fa: 'کشور', en: 'Country'},
    birthdate: {fa: 'تاریخ تولد', en: 'Birthdate'},
    bio: {fa: 'مختصری از زندگی', en: 'Bio'},

    // User Information
    jender: {fa: 'جنسیت', en: 'Jender'},
    occupation: {fa: 'شغل', en: 'occupation'},
    birthDate: {fa: 'تاریخ تولد', en: 'Birth Date'},
    passportNo: {fa: 'گذرنامه', en: 'Passport No.'},
    male: {fa: 'مرد', en: 'Male'},
    female: {fa: 'زن', en: 'Female'},
    admin: {fa: 'مدیر سایت', en: 'Admin'},
    guest: {fa: 'مهمان', en: 'Guest'},
    host: {fa: 'میزبان', en: 'Host'},
    registrationNo: {fa: 'شماره ثبت', en: 'Registration No'},

    // Modals
    updateBalance: {fa: 'به‌روز رسانی اعتبار', en: 'Update Balance'},
    editResort: {fa: 'ویرایش اقامتگاه', en: 'Edit Resort'},
    addResort: {fa: 'افزودن اقامتگاه', en: 'Add Resort'},
    addUser: {fa: 'افزودن کاربر', en: 'Add User'},
    editUser: {fa: 'ویرایش کاربر', en: 'Edit User'},
    addBooking: {fa: 'افزودن رزرو', en: 'Add Booking'},
    editBooking: {fa: 'ویرایش رزرو', en: 'Edit Booking'},
    addCity: {fa: 'افزودن شهر', en: 'Add City'},
    editCity: {fa: 'ویرایش شهر', en: 'Edit City'},
    addInvoice: {fa: 'افزودن فاکتور', en: 'Add Invoice'},
    editInvoice: {fa: 'ویرایش فاکتور', en: 'Edit Invoice'},
    addReview: {fa: 'افزودن نظرسنجی', en: 'Add Review'},
    editReview: {fa: 'ویرایش نظرسنجی', en: 'Edit Review'},
    addTransaction: {fa: 'افزودن تراکنش', en: 'Add Transaction'},
    editTransaction: {fa: 'ویرایش تراکنش', en: 'Edit Transaction'},
    editLocation: {fa: 'ویرایش مکان', en: 'Edit Location'},
    addLocation: {fa: 'افزودن مکان', en: 'Add Location'},

    // corporate admin
    corporateTravel: {fa: 'سفر سازمانی', en: 'CorporateTravel'},
    travelsHistories: {fa: 'تاریخچه سفرها', en: 'TravelsHistories'},
    corporateResorts: {fa: 'خانه‌های سازمانی', en: 'CorporateResorts'},
    support: {fa: 'پشتیبانی', en: 'Support'},

    specialOffers: {fa: 'پیشنهادات ویژه', en: 'Special Offers'},
    magfaTitle: {fa: 'مرکز گسترش فناوری اطلاعات مگفا', en: 'MAGFA'},
    lastNews: {fa: 'آخرین اخبار تیریپ ما', en: 'Last News'},
    // : {fa: '', en: ''},
  }
}
