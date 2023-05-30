import * as dayjs from 'dayjs';
import 'dayjs/locale/zh-cn'; // 导入本地化语言
import * as isLeapYear from 'dayjs/plugin/isLeapYear'; // 导入插件

dayjs.extend(isLeapYear); // 使用插件
dayjs.locale('zh-cn'); // 使用本地化语言

// 当天day格式00:00:00
export const today = new Date(new Date().toLocaleDateString());
//是否是晚上
export const isNight = () => {
    const nowHour = dayjs().hour();
    if (nowHour >= 19) {
        return true;
    } else {
        return false;
    }
};
// 当天的开始间时转换格式 00:00:00
export const begin_today = dayjs(today).format('YYYY-MM-DD HH:mm:ss');
// 当天的结束时间 23:59:59
export const after_today = dayjs(today.getTime() + 3600 * 1000 * 24 - 1).format('YYYY-MM-DD HH:mm:ss');

export const begin_week = dayjs(today.getTime() - 3600 * 1000 * 24 * 7).format('YYYY-MM-DD HH:mm:ss');
