/**
 * 猜数字游戏核心类
 * 负责游戏的基本逻辑：生成随机数、处理猜测、提供提示
 */
class Game {
  constructor(min = 1, max = 100) {
    this.min = min;
    this.max = max;
    this.targetNumber = this.generateRandomNumber();
    this.attempts = 0;
    this.maxAttempts = 10;
    this.gameStatus = 'playing'; // 'playing', 'won', 'lost'
    this.guessHistory = [];
  }

  /**
   * 生成指定范围内的随机数
   */
  generateRandomNumber() {
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  }

  /**
   * 处理用户的猜测
   * @param {number} guess - 用户猜测的数字
   * @returns {object} 包含结果信息的对象
   */
  makeGuess(guess) {
    // 验证输入
    if (typeof guess !== 'number' || isNaN(guess)) {
      return {
        valid: false,
        message: '请输入一个有效的数字！'
      };
    }

    if (guess < this.min || guess > this.max) {
      return {
        valid: false,
        message: `请输入 ${this.min} 到 ${this.max} 之间的数字！`
      };
    }

    if (this.gameStatus !== 'playing') {
      return {
        valid: false,
        message: '游戏已结束！请开始新游戏。'
      };
    }

    this.attempts++;
    this.guessHistory.push(guess);

    let result = {
      valid: true,
      guess: guess,
      attempts: this.attempts,
      maxAttempts: this.maxAttempts
    };

    if (guess === this.targetNumber) {
      this.gameStatus = 'won';
      result.status = 'won';
      result.message = `🎉 恭喜！您猜对了！数字就是 ${this.targetNumber}！用了 ${this.attempts} 次尝试。`;
    } else if (this.attempts >= this.maxAttempts) {
      this.gameStatus = 'lost';
      result.status = 'lost';
      result.message = `😢 游戏结束！您已用完所有 ${this.maxAttempts} 次机会。正确答案是 ${this.targetNumber}。`;
    } else {
      result.status = 'continue';
      if (guess < this.targetNumber) {
        result.message = `📈 太小了！请猜一个更大的数字。剩余 ${this.maxAttempts - this.attempts} 次机会。`;
      } else {
        result.message = `📉 太大了！请猜一个更小的数字。剩余 ${this.maxAttempts - this.attempts} 次机会。`;
      }
    }

    return result;
  }

  /**
   * 重新开始游戏
   */
  restart() {
    this.targetNumber = this.generateRandomNumber();
    this.attempts = 0;
    this.gameStatus = 'playing';
    this.guessHistory = [];
  }

  /**
   * 获取游戏统计信息
   */
  getGameStats() {
    return {
      targetNumber: this.gameStatus !== 'playing' ? this.targetNumber : null,
      attempts: this.attempts,
      maxAttempts: this.maxAttempts,
      status: this.gameStatus,
      guessHistory: [...this.guessHistory],
      range: `${this.min}-${this.max}`
    };
  }

  /**
   * 获取提示（消耗一次机会）
   */
  getHint() {
    if (this.gameStatus !== 'playing') {
      return '游戏已结束，无法获取提示。';
    }

    this.attempts++;
    
    if (this.attempts >= this.maxAttempts) {
      this.gameStatus = 'lost';
      return `提示消耗了最后一次机会！游戏结束，正确答案是 ${this.targetNumber}。`;
    }

    const quarter = Math.ceil((this.max - this.min) / 4);
    const lowerBound = Math.max(this.min, this.targetNumber - quarter);
    const upperBound = Math.min(this.max, this.targetNumber + quarter);
    
    return `💡 提示：目标数字在 ${lowerBound} 到 ${upperBound} 之间。剩余 ${this.maxAttempts - this.attempts} 次机会。`;
  }
}

module.exports = Game;