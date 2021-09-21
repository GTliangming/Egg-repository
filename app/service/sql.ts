// /* eslint-disable jsdoc/check-param-names */
// /* eslint-disable @typescript-eslint/indent */
// import { Service } from 'egg';
// /**
//  * Test Service
//  */
// export default class Sql extends Service {

// 	/**
// 	 * 查找一条
// 	 * @param tableName - 表名
// 	*  @param searchCondition - 查询条件
// 	 */
// 	public async getOne(tableName: string, searchCondition: any) {
// 		console.log(44444);
// 		const result = await this.app.mysql.get(tableName, searchCondition);
// 		console.log(44444, result);
// 		return result;
// 	}
// 	/**
// 	* 查找多条
// 	* @param tableName - 表名
// 	*  @param searchCondition - 查询条件
// 	*/
// 	public async goSelect(tableName: string, searchCondition: any) {
// 		const result = await this.app.mysql.get(tableName, searchCondition);
// 		return result;
// 	}
// 	/**
// 	 * 通过sql语句查找
// 	 * @param sqlSentence - sql语句
// 	 */
// 	public async goQuery(sqlSentence: string) {
// 		const result = await this.app.mysql.query(sqlSentence);
// 		return result;
// 	}
// 	/**
// 	 * 插入数据
// 	 * @param tableName - 表名
// 	*  @param insertCondition - 插入的数据
// 	 */
// 	public async goInsert(tableName: string, insertCondition: any) {
// 		const result = await this.app.mysql.insert(tableName, insertCondition);
// 		return result;
// 	}
// 	/**
// 	 * 修改数据
// 	 * @param tableName - 表名
// 	*  @param updateCondition - 更新内容
// 	 */
// 	public async goUpdate(tableName: string, updateCondition: any) {
// 		const result = await this.app.mysql.update(tableName, updateCondition);
// 		return result;
// 	}
// 	/**
// 	* 删除数据
// 	* @param tableName - 表名
// 	*  @param deleteCondition - 删除条件
// 	*/
// 	public async goDelete(tableName: string, deleteCondition: any) {
// 		const result = await this.app.mysql.delete(tableName, deleteCondition);
// 		return result;
// 	}

// 	/**
// 	* 自定义注册事务
// 	* @param tableName - 表名
// 	*  @param Condition - 删除条件
// 	*/

// 	public async goChargeRegster(tableName: string, Condition: any) {
// 		const conn = await this.app.mysql.beginTransaction();
// 		console.log(44555);
// 		try {
// 			// 查询注册用户是否已存在
// 			const result = await conn.get(tableName, Condition).then(res => console.log(5555, res));
// 			// console.log(44555)
// 			console.log(44444, result);
// 			console.log(44555);
// 			if (result) {
// 				return { message: '用户已存在', result };
// 			}
// 			const result1 = await conn.insert(tableName, Condition);
// 			await conn.commit();
// 			return { message: '注册成功', result1 };

// 		} catch (error) {
// 			await conn.rollback();
// 			throw error;
// 		}
// 	}
// }
