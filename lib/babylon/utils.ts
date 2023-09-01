import { interval, Observable } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';

export function isDayOrNight(): Observable<boolean> {
  const isDaytime = () => {
    const now = new Date();
    const hour = now.getHours();
    return hour >= 6 && hour < 18;
  };

  return interval(1000).pipe(
    map(() => isDaytime()),
    distinctUntilChanged()
  );
}
