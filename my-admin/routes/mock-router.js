/*
 * @Author: Yanzhao.Zhang
 * @Date: 2019-11-21 14:16:46
 * @LastEditors: Yanzhao.Zhang
 * @LastEditTime: 2019-11-21 16:46:51
 * @Description: 
 */

const express = require('express')
const router = express.Router()
const Mock = require('mockjs')
const _ = require('lodash')

// 错误类型饼图
router.post('/mock', (req, res) => {
  res.json(Mock.mock({
        people:_.times(2,function(n){
            return {
                id  : n,
                name: Mock.Random.cname(),
                img : Mock.Random.image('200x100', Mock.Random.color()),
                text: Mock.Random.cparagraph(),
                time: Mock.Random.date('yyyy-MM-dd'),
                star: Mock.mock({
                    'number|1-100': 100
                })
            }
        }),
        product:_.times(100,function(n){
            return {
                id   : n,
                name : Mock.Random.cname(),
                img  : Mock.Random.image('200x100', Mock.Random.color()),
                text : Mock.Random.cparagraph(),
                time : Mock.Random.date('yyyy-MM-dd'),
                price: Mock.mock({
                    'number|1-100': 100
                })
            }
        })
    })
  )
})

module.exports = router