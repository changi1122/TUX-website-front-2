import * as dayjs from 'dayjs';
import 'dayjs/locale/ko';
var relativeTime = require('dayjs/plugin/relativeTime');

export default function configDayjsLocale() {
    dayjs.extend(relativeTime);
    dayjs().locale('ko');
}